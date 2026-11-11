
import React from "react";
import { ShoppingCart, Star, Heart, Truck, ShieldCheck, Package } from "lucide-react";

const Card = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply"
        />

        <span className="absolute left-4 top-4 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {product.availabilityStatus}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {product.discountPercentage.toFixed(2)}% OFF
        </span>

        <button className="absolute right-4 bottom-4 rounded-full bg-white p-2 shadow hover:text-red-500">
          <Heart size={20} />
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-3 p-5">

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {product.brand}
          </span>

          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
            {product.category}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={17} fill="currentColor" />
            <span className="font-semibold text-gray-800">
              {product.rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.reviews.length} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Stock */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
          <span className="flex items-center gap-2 text-gray-500">
            <Package size={17} />
            Stock: {product.stock}
          </span>

          <span className="flex items-center gap-2 text-gray-500">
            <Truck size={17} />
            {product.shippingInformation}
          </span>
        </div>

        {/* Warranty */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <ShieldCheck size={17} />
          {product.warrantyInformation}
        </div>

        {/* Add to Cart */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
          <ShoppingCart size={19} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default Card;
