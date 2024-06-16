import { Link, NavLink } from "react-router-dom";
import {
  HambergerMenu,
  Heart,
  Menu,
  MenuBoard,
  SearchNormal,
  ShoppingBag,
} from "iconsax-react";
import { navlinks } from "../../utils/data";

const Navbar = () => {
  return (
    <nav className="w-full h-[4rem]">
      <div className="max-w-screen-xl w-full h-full mx-auto flex items-center justify-between px-4 sm:px-7 lg:px-10 xl:px-7 2xl:px-0">
        <Link to="/" className="w-fit">
          <span className="text-xl font-semibold text-primary">Klinik RX</span>
        </Link>

        <div className="hidden w-fit md:flex items-center gap-x-7">
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.route}
              className={({ isActive }) =>
                `text-[0.95rem] font-medium ${
                  isActive
                    ? "scale-110 text-primary"
                    : "text-stone-700 hover:scale-110 hover:text-primary"
                } transition-all`
              }
            >
              {link.placeholder}
            </NavLink>
          ))}
        </div>

        {/* For smaller screens */}
        <div className="md:hidden w-fit flex items-center gap-x-6">
          <Link to="">
            <ShoppingBag />
          </Link>

          <button type="button">
            <Menu size={30} />
          </button>
        </div>

        <div className="hidden w-fit md:flex items-center gap-x-8">
          <div className="w-fit flex items-center gap-x-6">
            <NavLink>
              <SearchNormal />
            </NavLink>

            <NavLink>
              <ShoppingBag />
            </NavLink>

            <NavLink>
              <Heart />
            </NavLink>
          </div>

          <Link
            to=""
            className="bg-primary text-white px-6 py-2.5 text-[0.85rem] rounded-full"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
