import { NavLink, useLocation } from "react-router-dom";
import { Heart, ShoppingBag } from "iconsax-react";
import { PrimaryLink } from "..";
import { navlinks } from "../../utils/data";

const MobileNavBar = (props) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`lg:hidden w-full h-[90lvh] overflow-hidden bg-secondary/80 backdrop-blur-md fixed top-[10lvh] left-0 ${
        props.isActive ? "scale-100" : "scale-0"
      } origin-center transition-all duration-300`}
    >
      <div className="w-full h-full flex-col flex items-center gap-y-6 pt-12">
        {navlinks.map((link, index) => (
          <NavLink
            to={link.route}
            onClick={() => props.setActive(false)}
            key={index}
            className={({ isActive }) =>
              `w-fit relative after:w-full after:h-[4px] text-primary after:bg-primary after:absolute after:-bottom-[6px] after:left-0 after:rounded-full  ${
                isActive
                  ? "text-2xl after:scale-100"
                  : "text-xl active:text-2xl"
              } after:scale-0 after:origin-left transition-all duration-300`
            }
          >
            {link.placeholder}
          </NavLink>
        ))}

        <div className="mt-10 flex flex-col items-center gap-y-6">
          <div className="w-fit flex md:hidden items-center gap-x-8">
            {/* Cart */}
            <NavLink to="/cart" onClick={() => props.setActive(false)}>
              <ShoppingBag
                variant={pathname.includes("/cart") ? "Bold" : "Outline"}
                size={28}
                color="#064439"
              />
            </NavLink>

            {/* Favorite item (or Wishlist) */}
            <NavLink to="/wishlist" onClick={() => props.setActive(false)}>
              <Heart
                size={28}
                variant={pathname.includes("/wishlist") ? "Bold" : "Outline"}
                color="#064439"
              />
            </NavLink>
          </div>

          {/* Sign-in */}
          <PrimaryLink
            navigateTo="/sign-in"
            onClick={() => props.setActive(false)}
            placeholder="Sign in"
            twTextSize="text-lg"
            btnColor="bg-primary text-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
