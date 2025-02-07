"use client"

import { useState } from "react";

export default function Cart ( ) {
  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  // Function to increase the quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Minimum quantity is 1
  };

  return (
    <div className="border p-4 rounded-lg shadow-md w-64">
     
      {/* Quantity Controls */}
      <div className="flex items-center gap-4 mt-4">
        {/* Decrease Button */}
        <button
          onClick={decreaseQuantity}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        {/* Quantity Display */}
        <span className="text-lg font-semibold">{quantity}</span>
        {/* Increase Button */}
        <button
          onClick={increaseQuantity}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
