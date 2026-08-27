import { Outlet } from "react-router";
import Hero from "~/components/Hero";
const HomeLayout = () => {
  return (
    <>
      <Hero
        text="We craft more than just houses - we create custom homes designed
around your life, your style, and your dreams."
      />

      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
