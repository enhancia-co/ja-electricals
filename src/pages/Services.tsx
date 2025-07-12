import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Lightbulb,
  Shield,
  Truck,
  Users,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Electrical Consultancy',
      description: 'Expert advice and consultation for all your electrical projects, from small repairs to large installations.',
      features: ['Project Planning', 'Code Compliance', 'Safety Assessment', 'Cost Estimation']
    },
    {
      icon: Truck,
      title: 'Bulk Supply',
      description: 'Wholesale electrical supplies for contractors, businesses, and large-scale projects with competitive pricing.',
      features: ['Volume Discounts', 'Custom Orders', 'Direct Delivery', 'Flexible Payment']
    },
    {
      icon: Shield,
      title: 'Safety Solutions',
      description: 'Comprehensive electrical safety products and services to ensure compliance and protect your property.',
      features: ['Safety Audits', 'Emergency Equipment', 'Training Programs', 'Compliance Support']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Professional lighting solutions for residential, commercial, and industrial applications.',
      features: ['LED Solutions', 'Smart Lighting', 'Energy Efficiency', 'Custom Design']
    },
    {
      icon: Users,
      title: 'Installation Support',
      description: 'Technical support and guidance for electrical installations and system upgrades.',
      features: ['Technical Guidance', 'Installation Tools', 'Troubleshooting', 'Product Training']
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: '24/7 emergency supply and support for critical electrical situations and urgent repairs.',
      features: ['24/7 Availability', 'Emergency Stock', 'Rapid Response', 'Priority Service']
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical solutions designed to meet your specific needs.
            From consultation to installation, we're here to support your projects every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">All work meets industry standards and regulations</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Timely Service</h3>
              <p className="text-gray-600 text-sm">Fast response times and on-schedule delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Full Support</h3>
              <p className="text-gray-600 text-sm">Comprehensive support from start to finish</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your electrical needs and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;