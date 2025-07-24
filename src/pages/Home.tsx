import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Wrench, Lightbulb, Shield, Truck, Users, Clock, Award, MapPin, Phone, Mail } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from "../data/products";
import banner from "../assets/banner.jpg"

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    services: false,
    products: false,
    whyChoose: false,
    contact: false
  });

  // Calculate years of experience dynamically
  const yearsExperience = new Date().getFullYear() - 2015;

  useEffect(() => {
    // Trigger hero animation on mount
    setIsVisible(prev => ({ ...prev, hero: true }));

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setIsVisible(prev => ({ ...prev, [section]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Wrench,
      title: 'Electrical Consultancy',
      description: 'Expert advice and consultation for all your electrical projects.',
      color: 'from-orange-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Bulk Supply',
      description: 'Wholesale electrical supplies for contractors and businesses.',
      color: 'from-blue-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Safety Solutions',
      description: 'Comprehensive electrical safety products and services.',
      color: 'from-orange-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Professional lighting solutions for all applications.',
      color: 'from-blue-500 to-orange-600'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every product we offer and every service we provide.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality means we only stock products from trusted manufacturers.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Every decision we make is centered around providing exceptional service.'
    }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[90vh] bg-gray-100 relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), linear-gradient(rgba(37, 99, 235, 0.7), rgba(234, 88, 12, 0.7)), url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className={`text-center transition-all duration-1000 ease-out ${isVisible.hero
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            {/* here add  */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-white">
              Jalal Ali Ahmad Otayyif Trading Est
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10" style={{ color: '#FFD600' }}>
              مؤسسة جلال علي احمد عطيف التجارية
            </h3>
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6">
              Your trusted destination for <br className="hidden sm:block" />
              all electrical supplies and solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-blue-100">
              Quality products, professional service, and expert guidance for all your electrical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white" data-section="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ease-out ${isVisible.about
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              About JA TRD EST
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Powering your projects with quality electrical supplies and exceptional service since 2015.
              We've grown from a small local supplier to a trusted partner for electrical professionals
              and businesses across the region.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {/* Mission Statement */}
              <div className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-l-4 border-orange-500 transition-all duration-1000 ease-out delay-200 ${isVisible.about
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  At <strong> JA</strong>  , our mission is to offer a comprehensive range of electrical products
                  that meet the diverse needs of our customers. We strive to deliver top-notch
                  products, from basic wiring to complex electrical systems, ensuring safety,
                  performance, and efficiency in every project.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible.about
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-8'
                      }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                      <value.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base md:text-lg">{value.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className={`text-center transition-all duration-1000 ease-out delay-600 ${isVisible.about
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}>
                <Link
                  to="/about"
                  className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm sm:text-base"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white" data-section="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${isVisible.services
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions designed to meet your specific needs.
              From consultation to installation, we're here to support your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible.services
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
                  }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${service.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 ease-out delay-600 ${isVisible.services
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-sm sm:text-base"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 bg-gray-50" data-section="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${isVisible.products
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Featured Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Discover our most popular electrical supplies and solutions
            </p>
          </div>

          <div className={`grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 transition-all duration-1000 ease-out delay-200 ${isVisible.products
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
                className="transition-all duration-500 transform hover:scale-105"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ease-out delay-600 ${isVisible.products
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <Link
              to="/products"
              className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-sm sm:text-base"
            >
              Show More Products
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Impact Section */}
      <section className="py-12 sm:py-16 bg-white" data-section="whyChoose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${isVisible.whyChoose
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose JA TRD EST?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a DIY enthusiast, professional electrician, or business in need of reliable electrical components,
              we provide high-quality products and exceptional service for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
            {[
              {
                icon: CheckCircle,
                title: "Quality Guaranteed",
                description: "All products meet industry standards and come with comprehensive warranties",
                color: "orange"
              },
              {
                icon: Star,
                title: "Expert Support",
                description: "Professional guidance and technical support for all your electrical needs",
                color: "blue"
              },
              {
                icon: ArrowRight,
                title: "Fast Delivery",
                description: "Quick and reliable delivery to keep your projects on schedule",
                color: "orange"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ease-out ${isVisible.whyChoose
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
                  }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`bg-${item.color}-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 transform hover:scale-110`}>
                  <item.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Our Impact Section */}
          <div className={`bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100 transition-all duration-1000 ease-out delay-400 ${isVisible.whyChoose
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: Users, number: "1000+", text: "Happy Customers", color: "orange" },
                { icon: Shield, number: "100+", text: "Products Available", color: "blue" },
                { icon: Award, number: `${yearsExperience}+`, text: "Years Experience", color: "orange" },
                { icon: Clock, number: "24/7", text: "Customer Support", color: "blue" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group transition-all duration-500 transform hover:scale-105"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${item.color}-600 mb-1 sm:mb-2`}>{item.number}</div>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gray-50" data-section="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${isVisible.contact
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your electrical project? Contact our team of experts for personalized
              solutions and professional guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              { icon: Phone, title: "Phone", info: "+966 550613197", subInfo: "09:30 AM - 7:00 PM, Friday holiday", color: "orange" },
              { icon: Mail, title: "Email", info: "sales@jatraders.com", subInfo: "", color: "blue" },
              { icon: MapPin, title: "Address", info: "Al Falah St-Al Qurayat Dist.", subInfo: "Jeddah Kingdom of Saudi Arabia", color: "orange" }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ease-out ${isVisible.contact
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
                  }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`bg-${item.color}-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 transform hover:scale-110`}>
                  <item.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.info}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{item.subInfo}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 ease-out delay-600 ${isVisible.contact
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-sm sm:text-base"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;