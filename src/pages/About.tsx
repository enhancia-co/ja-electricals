import React from 'react';
import { Award, Users, Shield, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every product we offer and every service we provide, ensuring compliance with all industry standards.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality means we only stock products from trusted manufacturers with proven track records.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Every decision we make is centered around providing exceptional service and support to our valued customers.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of industry trends, continuously updating our inventory with the latest electrical technologies.'
    }
  ];

  const team = [
    {
      name: 'John Anderson',
      role: 'Founder & CEO',
      description: 'With over 20 years in the electrical industry, John founded JA TRD EST to bridge the gap between quality and affordability.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Technical Director',
      description: 'Sarah brings 15 years of electrical engineering experience, ensuring our products meet the highest technical standards.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Operations Manager',
      description: 'Mike oversees our supply chain and logistics, ensuring fast, reliable delivery of products to our customers.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About JA TRD EST
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powering your projects with quality electrical supplies and exceptional service since 2010.
          </p>
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to JA TRD EST</h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to JA TRD EST, your trusted destination for all electrical supplies and solutions.
            Whether you're a DIY enthusiast, a professional electrician, or a business in need of reliable
            electrical components, we are here to provide high-quality products and exceptional service.
          </p>
          <p className="text-lg text-gray-600">
            Founded with a passion for excellence and a commitment to customer satisfaction, we've grown
            from a small local supplier to a trusted partner for electrical professionals and businesses
            across the region. Our journey has been built on the foundation of quality, reliability, and
            unwavering dedication to our customers' success.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-6">
              At JA TRD EST, our mission is to offer a comprehensive range of electrical products that meet
              the diverse needs of our customers. We strive to deliver top-notch products, from basic wiring
              to complex electrical systems, ensuring safety, performance, and efficiency in every project.
            </p>
            <p className="text-lg">
              We believe that every electrical project, no matter how big or small, deserves the best components
              and the most knowledgeable support. That's why we're committed to being more than just a supplier –
              we're your electrical solutions partner.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Electrical Components</h3>
              <p className="text-gray-600 mb-4">
                We carry a wide variety of electrical supplies including cables, connectors, switches,
                outlets, and circuit breakers. Our inventory includes products from industry-leading
                manufacturers, ensuring reliability and performance in every application.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• High-quality wiring and cables</li>
                <li>• Professional-grade switches and outlets</li>
                <li>• Safety devices and circuit protection</li>
                <li>• Connectors and junction boxes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lighting Solutions</h3>
              <p className="text-gray-600 mb-4">
                From traditional incandescent bulbs to cutting-edge LED systems, we offer comprehensive
                lighting solutions for residential, commercial, and industrial applications. Our lighting
                experts can help you find the perfect solution for any project.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Energy-efficient LED lighting</li>
                <li>• Smart lighting systems</li>
                <li>• Emergency and exit lighting</li>
                <li>• Decorative and specialty lighting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10,000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;