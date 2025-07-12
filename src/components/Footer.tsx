import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Zap } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            <div>
              <img src={logo} alt="" className='w-10 h-10 bg-white border-2 border-white rounded-lg'  />
            </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">JA TRD EST</span>
                <span className="text-sm text-gray-400">Electricals & Safety</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted destination for all electrical supplies and solutions.
              Quality products, exceptional service, and professional expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500" />
                <span className="text-gray-400">info@jatrdest.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-orange-500" />
                <span className="text-gray-400">123 Business Ave, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} JA TRD EST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;