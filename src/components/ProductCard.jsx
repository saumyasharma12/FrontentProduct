import React, { useState } from "react";
import { Heart } from "lucide-react";
import AuthModal from "./AuthModal";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <div className="relative bg-white p-3 sm:p-4 w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto hover:shadow-md rounded-lg">
        {/* Heart Icon */}
        <div className="absolute top-3 right-3 z-10">
          <Heart
            className={`cursor-pointer transition-all ${
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-400"
            }`}
            size={20}
            onClick={toggleLike}
          />
        </div>

        {/* Product Image */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-36 sm:h-40 object-contain mx-auto"
          />
        </div>

        {/* Product Name */}
        <h2 className="text-sm sm:text-base text-start font-bold mt-3 sm:mt-4">
          PRODUCT NAME
        </h2>

        {/* Pricing Info */}
        <p className="text-xs sm:text-sm text-gray-500 text-start mt-1">
          <span
            onClick={() => setShowModal(true)}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Sign in
          </span>{" "}
          or Create an account to see pricing
        </p>
      </div>

      <AuthModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ProductCard;
