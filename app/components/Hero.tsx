import { Link } from "react-router";

const Hero = ({
  text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam eveniet ut unde sit soluta ducimus laboriosam ullam at. Unde!",
}) => {
  return (
    <header className="min-h-[80vh] text-center py-20 px-4 bg-[url('/background4.jpg')] bg-cover bg-center bg-no-repeat text-white transition-colors duration-300">
      <div className="bg-white/30 backdrop-blur-sm w-fit mx-auto rounded-lg py-5">
        <h2 className="text-4xl font-bold mb-4">HomeNest 🏠</h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-6">{text}</p>
        <div className="flex justify-center gap-4">
          <Link
            to="/properties"
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            View Explore
          </Link>
          <Link
            to="/contact"
            className="border border-gray-700 text-gray-700 px-6 py-2 rounded hover:bg-gray-700 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
