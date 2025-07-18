import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Optionally, reset submitted after a delay
      setTimeout(() => setSubmitted(false), 2000);
    }, 1500);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get in touch with our team of electrical experts. We're here to help with your projects, 
            answer questions, and provide the support you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+966 536762839</p>
                    {/* <p className="text-xs sm:text-sm text-gray-500">Mon-Fri 8:00 AM - 6:00 PM</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">jalalaliahmedattiesfest@gmail.com</p>
                    {/* <p className="text-xs sm:text-sm text-gray-500">We'll respond within 24 hours</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Al Falah St-Al Qurayat Dist. <br />Jeddah Kingdom of Saudi Arabia</p>
                    {/* <p className="text-xs sm:text-sm text-gray-500">Visit our showroom</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h3>
                    <div className="text-gray-600 text-sm sm:text-base">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            {/* <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Emergency Services</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Need electrical supplies urgently? We offer 24/7 emergency support for critical situations.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">Emergency Line: +1 (555) 999-0000</span>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent text-sm sm:text-base"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent text-sm sm:text-base"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-orange-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-700'}`}
                disabled={loading || submitted}
              >
                {loading ? (
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                ) : submitted ? (
                  <span className="flex items-center">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Submitted
                  </span>
                ) : (
                  <span className="flex items-center"><Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" /> Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Visit Our Location</h2>
            <div className="bg-gray-200 rounded-lg h-48 sm:h-56 md:h-64 flex items-center justify-center">
              <p className="text-gray-600 text-center text-sm sm:text-base">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-2 text-orange-600" />
                Interactive Map Coming Soon<br />
                <span className="text-xs sm:text-sm">123 Business Avenue, City, State 12345</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="#" className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="bg-blue-800 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-900 transition-colors">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="bg-pink-600 text-white p-2 sm:p-3 rounded-lg hover:bg-pink-700 transition-colors">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;