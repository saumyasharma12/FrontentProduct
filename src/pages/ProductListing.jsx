import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(18);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    
    <div className="flex flex-col md:flex-row px-4 md:px-10 py-6">
      <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
        <FilterSidebar />
      </div>

      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 18)}
              className="px-4 py-2 border border-black text-sm font-medium uppercase hover:bg-black hover:text-white"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
