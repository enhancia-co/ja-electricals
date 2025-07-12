import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import type { Product } from '../data/products';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts: Product[] = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of electrical supplies and solutions.
            Quality products for professionals and DIY enthusiasts.
          </p>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden sm:block">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 mb-8 border border-gray-100">
            {/* Tablet Layout - Side by side with medium sizing */}
            <div className="hidden sm:flex lg:hidden sm:flex-row sm:gap-4">
              {/* Search */}
              <div className="relative group flex-1">
                <Search className="absolute left-4 top-5 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-xl  transition-all duration-200 text-base bg-gray-50 focus:bg-white hover:bg-white placeholder-gray-400 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative group sm:w-48">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200 z-10" />
                <select
                  className="w-full pl-12 pr-10 py-2 border border-gray-200 rounded-xl transition-all duration-200 appearance-none bg-gray-50 focus:bg-white hover:bg-white text-base shadow-sm cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Desktop Layout - Side by side with larger sizing */}
            <div className="hidden lg:flex lg:flex-row lg:gap-6">
              {/* Search */}
              <div className="relative group flex-1">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-16 pr-6 py-2 border border-gray-200 rounded-xl focus:border-orange-500 transition-all duration-200 text-lg bg-gray-50 focus:bg-white hover:bg-white placeholder-gray-400 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative group lg:w-64">
                <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-200 z-10" />
                <select
                  className="w-full pl-16 pr-12 py-2 border border-gray-200 rounded-xl focus:border-orange-500 transition-all duration-200 appearance-none bg-gray-50 focus:bg-white hover:bg-white text-lg shadow-sm cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter options.</p>
            </div>
          )}

          {/* Results Count */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          )}
        </div>

        {/* Mobile Layout - Fixed search/filter with scrollable products */}
        <div className="sm:hidden">
          {/* Fixed Search and Filter Container */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 mb-4">
            <div className="flex flex-col gap-4">
              {/* Search */}
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-1.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-sm bg-gray-50 focus:bg-white hover:bg-white placeholder-gray-400 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative group">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-200 z-10" />
                <select
                  className="w-full pl-10 pr-8 py-1.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 appearance-none bg-gray-50 focus:bg-white hover:bg-white text-sm shadow-sm cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Scrollable Products Container */}
          <div className="h-[calc(100vh-300px)] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-100 p-4">
            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No products found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter options.</p>
              </div>
            )}

            {/* Results Count */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;