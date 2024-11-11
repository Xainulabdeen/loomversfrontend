import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-white container max-w-7xl  justify-self-center">
     

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-5 py-8 flex flex-wrap items-center">
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <Link className="text-gray-600 hover:text-gray-800" to="/about">
                Learn More 
              </Link>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <Link className="text-gray-600 hover:text-gray-800" to="/storyboard">
                Write Your Own Blog
              </Link>
           
            </div>
            <div className="text-center md:text-left">
              <Link className="text-gray-600 hover:text-gray-800" to="/">
                Read New  Blog Posts

              </Link>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <Link className="text-gray-600 hover:text-gray-800" to="/help">
                Need Help!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Your Company —
            <a href="https://twitter.com/yourhandle" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">
              @yourhandle
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Your tag line or motto here
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
