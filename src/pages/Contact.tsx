import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
    setSubmitSuccess(false);

    axios.defaults.headers.post['Content-Type'] = 'application/json';

    try {
      const response = await axios.post(`https://formsubmit.co/ajax/${import.meta.env.VITE_FORM_SUBMIT_EMAIL}`, formData);
      if (response.status >= 200 && response.status < 300) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitError('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
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
                    <p className="text-gray-600 text-sm sm:text-base">+966 550613197</p>
                    {/* <p className="text-xs sm:text-sm text-gray-500">Mon-Fri 8:00 AM - 6:00 PM</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">sales@jatraders.com</p>
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
                      <p>09:30 AM - 07:00 PM</p>
                      <p>Friday holiday</p>
                      {/* <p>Sunday: Closed</p> */}
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
            {submitSuccess ? (
              <div className="text-center py-4 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Send className="text-orange-600 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2">Message sent successfully!</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Thank you for contacting us. We will get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-5 py-2 rounded-full transition-colors text-sm sm:text-base"
                >
                  Send another message
                </button>
              </div>
            ) : (
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

                {/* <div>
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
                </div> */}

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
                {submitError && (
                  <div className="text-red-600 text-sm text-center">{submitError}</div>
                )}
                <button
                  type="submit"
                  className={`w-full bg-orange-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-700'}`}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  ) : (
                    <span className="flex items-center"><Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" /> Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Visit Our Location</h2>
            <div className="rounded-lg overflow-hidden w-full h-64 sm:h-80 md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2778.438175335659!2d39.1939250752709!3d21.545799980236083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDMyJzQ0LjkiTiAzOcKwMTEnNDcuNCJF!5e1!3m2!1sen!2sin!4v1753366500514!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JA Electricals Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media */}
        {/* <div className="mt-8 sm:mt-12 md:mt-16 text-center">
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
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
              </svg>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;