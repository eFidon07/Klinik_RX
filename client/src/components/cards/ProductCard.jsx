import { Heart, ShoppingBag } from "iconsax-react";
import RangeCounter from "../ui/RangeCounter";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({
  totalItem,
  itemLeft,
  itemName,
  productImage,
  itemPrice,
  endPrice,
  discountPrice,
  className,
  itemId,
  category,
}) => {
  const navigate = useNavigate();

  const cardOnClick = (e) => {
    e.preventDefault();
    if (e.target?.classList?.contains("add_to_cart")) {
      e.preventDefault();
    }
    // Check if you click to add item to wishlist
    else if (e.target?.classList?.contains("add_to_fav")) {
      e.preventDefault();
    } else {
      navigate(`/product/${itemId}`);
    }
  };

  return (
    <Link
      to={`/product/${itemId}`}
      onClick={cardOnClick}
      className={`${className} relative w-full sm:w-[47%] lg:w-[31%] h-[28rem] rounded-2xl transition-all duration-200`}
    >
      <img
        src={productImage}
        alt={`image representing ${productImage}`}
        className="w-full h-full rounded-2xl object-cover object-center"
      />

      {/* Overlay */}
      <div className="w-full h-full bg-black/35 absolute top-0 left-0 rounded-2xl">
        <div className="m-3.5 w-fit flex items-center gap-x-2">
          {category
            .filter((_, index) => index < 2)
            .map((item, index) => (
              <span className="text-sm font-medium text-stone-900 bg-stone-300/65 backdrop-blur-md rounded-full py-2 px-3 capitalize">
                {item}
              </span>
            ))}
        </div>

        {/* name, price, stock and action buttons */}
        <div className="absolute bottom-6 w-[90%] left-1/2 -translate-x-1/2 overflow-hidden">
          {/* Item name */}
          <p className="w-full truncate mb-3 text-xl text-stone-100 font-medium">
            {itemName}
          </p>

          {/* Price */}
          <p className="text-3xl text-white font-medium mb-2">
            ₦{itemPrice?.toLocaleString()}
          </p>

          <div className="w-full flex items-center justify-between">
            {/* Stock info */}
            <div className="w-full">
              <span className="text-[0.8rem] text-white block w-fit mb-1.5 font-medium">
                {itemLeft} items left
              </span>
              <RangeCounter width={`${(itemLeft / totalItem) * 100}%`} />
            </div>

            {/* Action buttons */}
            <div className="w-fit flex items-center gap-x-3">
              {/* Add item to wishlist */}
              <button
                type="button"
                className="add_to_fav w-10 h-10 flex items-center justify-center rounded-full bg-white"
                onClick={() => console.log("heyy")}
              >
                <Heart size={22} className="text-primary pointer-events-none" />
              </button>

              {/* Add item to cart */}
              <button
                type="button"
                className="add_to_cart w-10 h-10 flex items-center justify-center rounded-full bg-white"
                onClick={() => console.log("hola")}
              >
                <ShoppingBag
                  size={22}
                  className="text-primary pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
