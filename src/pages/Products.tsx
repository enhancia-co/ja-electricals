import React, { useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard';
import CustomDropdown from '../components/CustomDropdown';
import { products } from '../data/products';
import { categories } from '../data/categories';
import type { Product } from '../types/types';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filteredProducts: Product[] = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const PaginationControls = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      }

      return pages;
    };

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page as number)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${currentPage === page
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

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
              <div className="sm:w-48">
                <CustomDropdown
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Select category"
                  icon={<Filter className="h-5 w-5" />}
                  size="md"
                />
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
              <div className="lg:w-64">
                <CustomDropdown
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Select category"
                  icon={<Filter className="h-6 w-6" />}
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {currentProducts.map((product) => (
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
                Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          <PaginationControls />
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
                  className="w-full pl-10 pr-4 py-1.5 border border-gray-200 rounded-lg focus:border-orange-500 transition-all duration-200 text-sm bg-gray-50 focus:bg-white hover:bg-white placeholder-gray-400 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <CustomDropdown
                options={categories}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select category"
                icon={<Filter className="h-4 w-4" />}
                size="sm"
              />
            </div>
          </div>

          {/* Scrollable Products Container */}
          <div className="h-[calc(125vh-300px)] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-100 p-4">
            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-3">
              {currentProducts.map((product) => (
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
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                </p>
              </div>
            )}

            {/* Mobile Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Prev
                </button>

                <span className="px-3 py-2 text-sm text-gray-600">
                  {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;