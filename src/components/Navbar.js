import React from "react";
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
       
        
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link
              to="/"
              class="font-semibold text-xl tracking-tight block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              GifMe
            </Link>
            <Link
              to="/search"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Search
            </Link>
            <Link
              to="/upload"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Upload
            </Link>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
