"use client"
import Products from '@/app/dataa/page';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // Correct import for App Router


import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from "lucide-react";

const ProductPage = () => {
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
  
  
  const { id } = useParams(); // Get dynamic route parameter
  const product = Products.find((p) => p.id === parseInt(id as string|| "0"));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    
        <Image src={product.image} alt="pic" width={400} height={300}  className='ml-[60px]'/> 
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-semibold text-blue-500">${product.price}</p>
      
    </div>
      
    
      
      <div className="flex items-center space-x-4 p-4">
      <button
        onClick={() => setQuantity(Math.max(0, quantity - 1))}
        className="p-2 bg-gray-200 rounded"
      >
        <Minus size={18} />
      </button>
      <span className="px-4 text-lg font-semibold">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="p-2 bg-gray-200 rounded"
      >
        <Plus size={18} />
      </button>
      <button className="p-2 bg-orange-500 text-white rounded flex items-center space-x-2">
        <ShoppingCart size={18} />
        <span>Add to Cart</span>
      </button>
    </div>
  
   
 
 
 </main>
  );
};

export default ProductPage;
