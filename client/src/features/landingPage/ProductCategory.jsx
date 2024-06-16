import { ArrowRight } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
import { drugCategories } from "../../utils/data";
import { CategoryCard, PrimaryLink } from "../../components";

// CATEGORY IMAGE: Photo by Nataliya Vaitkevich: https://www.pexels.com/photo/close-up-shot-of-pills-7615415/

const ProductCategory = () => {
  return (
    <section className="mt-28">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl md:text-[2.5rem] text-primary leading-tight font-semibold">
          Medication Category
        </h1>

        <PrimaryLink navigateTo="/products" placeholder="See All Category" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-[1%] gap-y-3 mt-12">
        {drugCategories
          .filter((_, i) => i < 6)
          .map((drug, index) => (
            <CategoryCard
              key={index}
              label={drug}
              index={index}
              imageUrl={index % 2 === 0 && "/img/category-image.jpg"}
              linkTo={`/products?category=${drug.toLowerCase()}`}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductCategory;
