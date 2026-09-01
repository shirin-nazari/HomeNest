const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row mb-12 items-center md:items-start gap-10">
        <img
          src="/images/pic-about.jpg"
          alt="home"
          className="w-50 h-50 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">About HomeNest</h1>
          <p className="text-gray-300 text-lg">
            HomeNest is a modern real estate platform designed to make finding
            your next home simple and enjoyable. Browse a variety of properties,
            explore detailed information, and find a place that fits your
            lifestyle and needs. Whether you're looking to buy or rent, HomeNest
            helps you discover properties with ease.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex flex-col md:flex-row  items-center gap-5 mx-auto w-full">
          <div className="flex-2">
            <h3 className="text-xl font-bold mb-4">
              🏠 Wide Range of Properties
            </h3>
            <p className="text-gray-400 text-sm ">
              Explore apartments, houses, villas, and more.
            </p>
          </div>
          <div className="flex-2">
            <h3 className="text-xl font-bold mb-4">🔎 Easy Property Search</h3>
            <p className="text-gray-400 text-sm ">
              Find properties based on location, price, type, and other
              preferences.
            </p>
          </div>
          <div className="flex-2">
            <h3 className="text-xl font-bold mb-4">📋 Detailed Information</h3>
            <p className="text-gray-400 text-sm ">
              View property details, images, features, and location before
              making a decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
