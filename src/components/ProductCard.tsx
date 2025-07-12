import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+917736382729'; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in the product *${product.title}*. Can you provide more details about pricing and availability?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 w-full">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-24 xs:h-28 sm:h-32 md:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Category Badge */}
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-3">
          <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 md:p-4 lg:p-6">
        {/* Product Title */}
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {product.title}
        </h3>
        
        {/* Description with gradient text */}
        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 lg:mb-6 line-clamp-2 sm:line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Enhanced Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1.5 sm:py-2 md:px-4 lg:px-6 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group/btn shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 group-hover/btn:animate-bounce" />
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default ProductCard;