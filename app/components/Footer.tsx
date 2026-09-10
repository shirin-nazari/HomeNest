import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdHomeWork, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-blue-300 mb-4"
          >
            <MdHomeWork className="text-blue-400 text-2xl" />
            <span>HomeNest</span>
          </NavLink>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Helping you find, rent, and buy the home that actually fits your
            life. Simple search, honest listings, real neighborhoods.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 5 text-sm">
            <li>
              <NavLink
                to="/properties"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Rent a home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/properties"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Buy a home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#neighborhoods"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Browse neighborhoods
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/properties"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Featured Projects
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 5 text-sm">
            <li>
              <NavLink
                to="/about"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Contact info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-blue-400 text-lg mt-0.5 shrink-0" />
              <span>Mashhad, Iran</span>
            </li>
            <li className="flex items-start gap-2">
              <MdPhone className="text-blue-400 text-lg mt-0.5 shrink-0" />
              <a
                href="tel:+989017402167"
                className="hover:text--blue-300 transition-colors"
              >
                +989017402167
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MdPhone className="text-blue-400 text-lg mt-0.5 shrink-0" />
              <a
                href="mailto:shirinnazari.h@gamil.com"
                className="hover:text--blue-300 transition-colors"
              >
                shirinnazari.h@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* {Bottom bar} */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {year} HomeNest. All rights reserved</p>
          <div className="flex items-center gap-4">
            <NavLink
              to="#privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="#terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
