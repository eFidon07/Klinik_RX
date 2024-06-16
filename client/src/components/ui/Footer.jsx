import { Link } from "react-router-dom";
import { navlinks } from "../../utils/data";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-700 py-16">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col items-start px-4 sm:px-7 lg:px-10 xl:px-7 2xl:px-0">
        <div className="w-full flex items-start justify-between">
          {/* Info */}
          <div>
            <Link to="/" className="w-fit">
              <span className="text-2xl font-semibold text-white">
                Klinik RX
              </span>
            </Link>

            <div className="text-white mt-10">
              <h2 className="mb-2 text-sm">Get in Touch with Us</h2>
              <div className="border border-white rounded-full p-1.5 flex">
                <input
                  type="text"
                  name="msg"
                  id="msg"
                  className="w-[300px] py-1.5 px-2 bg-red-0 rounded-l-full bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-white placeholder:text-[0.9rem]"
                  placeholder="Enter your message"
                />
                <button
                  type="button"
                  className="flex-1 text-sm rounded-full py-2 px-4 bg-primary text-secondary font-medium"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="flex items-start space-x-24">
            {/* Basic navigation */}
            <div>
              <h2 className="font-medium text-lg mb-2 text-white">
                Quick Links
              </h2>
              <div className="flex flex-col gap-y-2 text-stone-100 text-sm">
                {navlinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.route}
                    className="hover:text-secondary"
                  >
                    {link.placeholder}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <h2 className="font-medium text-lg mb-2 text-white">Company</h2>
              <div className="flex flex-col gap-y-2 text-stone-100 text-sm">
                <Link to="" className="hover:text-secondary">
                  Privacy Policy
                </Link>
                <Link to="" className="hover:text-secondary">
                  Copyright
                </Link>
                <Link to="" className="hover:text-secondary">
                  Terms and Condition
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="mt-16 w-full flex items-center justify-between">
          <p className="text-sm text-white">Copyright &copy; 2024 Klinik RX</p>
          <div className="w-fit flex items-center space-x-7 text-white">
            <Link to="" className="text-lg">
              <FaFacebookF />
            </Link>

            <Link to="" className="text-xl">
              <FaWhatsapp />
            </Link>

            <Link to="" className="text-xl">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
