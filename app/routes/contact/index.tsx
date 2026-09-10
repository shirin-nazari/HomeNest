import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types";
import { Form, useNavigation } from "react-router";
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    errors.email = "Invalid email Format";
  }
  if (!subject) errors.subject = "Subject is required";
  if (!message) errors.message = "Message is required";
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          FullName: name,
          Email: email,
          Subject: subject,
          Message: message,
        },
      }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.log("strapi Error: ", errorData);
      return {
        errors: {
          form: "ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.",
        },
      };
    }
    return { message: "پیام شما با موفقیت ارسال شد." };
  } catch (err) {
    console.error("Network error:", err);
    return {
      errors: {
        form: "خطا در برقراری ارتباط با سرور. اتصال اینترنت خود را بررسی کنید.",
      },
    };
  }
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const errors = actionData?.errors || {};
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (actionData?.message) {
      formRef.current?.reset();
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [actionData]);

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4 py-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Me
      </h2>
      {showSuccess && actionData?.message ? (
        <p className="mb-6 p-4 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md">
          {actionData.message}
        </p>
      ) : null}
      {errors.form ? (
        <p className="mb-6 p-4 bg-red-700 text-red-100 text-center rounded-lg border border-red-500 shadow-md">
          {errors.form}
        </p>
      ) : null}
      <Form ref={formRef} method="post" className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "در حال ارسال..." : "Send Message"}
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;
