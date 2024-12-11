'use client'
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Home, Layers, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Home className="h-6 w-6 mr-2" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">E-Shop</span>
        </Link>
        {/* Search Bar */}
        <div className="relative hidden md:flex items-center mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className={`w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col font-medium md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link href="/" className="flex items-center py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700">
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="flex items-center py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700">
                <Layers className="h-5 w-5 mr-1" />
                Shop
              </Link>
            </li>
            <li>
              <Link href="/categories" className="flex items-center py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700">
                <Layers className="h-5 w-5 mr-1" />
                Categories
              </Link>
            </li>
            <li>
              <Link href="/cart" className="flex items-center py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700">
                <ShoppingCart className="h-5 w-5 mr-1" />
                Cart
              </Link>
            </li>
            <li>
              <Link href="/account" className="flex items-center py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700">
                <User className="h-5 w-5 mr-1" />
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
