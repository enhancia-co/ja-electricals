import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <div>
              <img src={logo} alt="" className='w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-white rounded-lg'  />
            </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">JA TRD EST</span>
                <span className="text-xs text-gray-400">Electricals & Safety</span>
              </div>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 max-w-md text-xs sm:text-sm md:text-base">
              Your trusted destination for all electrical supplies and solutions.
              Quality products, exceptional service, and professional expertise.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={14} className="sm:w-4 sm:h-4 text-orange-500" />
                <span className="text-gray-400 text-xs sm:text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} className="sm:w-4 sm:h-4 text-orange-500" />
                <span className="text-gray-400 text-xs sm:text-sm">info@jatrdest.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={14} className="sm:w-4 sm:h-4 text-orange-500" />
                <span className="text-gray-400 text-xs sm:text-sm">123 Business Ave, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} JA TRD EST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;