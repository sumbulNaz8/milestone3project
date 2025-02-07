"use client"
import Image from 'next/image';
import Link from 'next/link'; // For navigation between pages
import Products from '@/app/dataa/page'; // Import product data
import { useState } from "react";


export default function Home() {
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
<main>
    
  <div>
  <nav className="flex  bg-orange-600  " >
    <div className=" flex space-x-8 ml-[110px] " >
    <li className="text-[14px]  text-white flex justify-center  mr-[510px] "></li>
    <li className="text-[14px] text-white flex justify-center   "> SAVE MORE ON APP</li>
    <li className="text-[14px]  text-white flex justify-center    ">SELL ON DARAZ</li>
    <li className="text-[14px]  text-white flex justify-center   ">HELP ON SUPPORT</li>
    <li className="text-[14px]  text-white flex justify-center   "> LOGIN</li>
    <li className="text-[14px]   text-white flex justify-center   "> SIGN UP</li>
    </div>
    <div className='mt-7 -ml-[450px]'>
    <div className="flex items-center space-x-2">
    <input
      type="text"
      placeholder="Search..."
      className="w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
    >
      Search
    </button>
  </div>
    </div>
    <li className="text-5xl  from-neutral-200 -ml-[80%]  text-white flex justify-center my-4  "> DARAZ</li>
    </nav>
    <div>
    <Image src="/images/image1.png" alt="pic" width={1000} height={700}  className='ml-[60px]'/>
    </div>
         <div className="  flex flex-wrap gap-[70px] p-9" >
         
               {Products.map((product => (
                    <div  key={product.id}
                    className="w-64 p-4 border border-gray-300 rounded-lg shadow-md">
                        <Image src={product.image} alt="pic" width={200} height={200}  className='ml-[20px]'/>                        <h2>{product.id}</h2>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-semibold text-blue-500">${product.price}</p>
      <Link href={`/product/${product.id}`} className="mt-3 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-blue-600 transition">View Details</Link>
    </div>
                    
                )))}
            </div>
      </div>
      <footer className="mt-10 bg-orange-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Company Info</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +92 123 456 7890</p>
        </div>
      </div>
      <div className="mt-6 border-t border-orange-600 pt-4 text-center text-sm">
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
      </div>
    </footer>
 
  </main>
    )}
