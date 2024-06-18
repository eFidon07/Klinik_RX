import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { PrimaryLink, ProductCard } from "../../../components";

const NewArrivals = () => {
  const products = [1, 2, 3];

  return (
    <section className="mt-20">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl md:text-4xl text-primary leading-tight font-semibold">
          New Arrivals
        </h1>

        <PrimaryLink
          navigateTo="/products/new-arrivals"
          placeholder="See All Products"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center sm:gap-x-[4%] lg:gap-x-[3.5%] gap-y-3 mt-12 mb-10">
        {products
          .filter((_, i) =>
            products.length < 6 && products.length >= 3
              ? i < 3
              : products.length >= 6
              ? i < 6
              : i <= products.length
          )
          .map((_, index) => (
            <ProductCard
              key={index}
              className="sm:last:hidden lg:last:inline-block"
              productImage={
                index % 2 === 0
                  ? "/img/category-image.jpg"
                  : "/img/hero-image-2.jpg"
              }
              itemName="Titanium Steel Cuban Hip Hop For People"
              totalItem={30}
              itemLeft={15}
              itemPrice={24000}
              endPrice={30000}
              itemId={index + 1}
              category={["new arrivals", "analgesics", "pain killers"]}
            />
          ))}
      </div>
    </section>
  );
};

export default NewArrivals;
