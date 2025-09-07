import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You'd typically send this data to an API endpoint here.
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a question? We're here to help. Reach out to us for manufacturing, fabrication, or repair requirements.
        </p>

        {/* Contact Information Section (Stacked) */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get in touch</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <i className="fa-brands fa-whatsapp text-4xl text-green-500"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Whatsapp</h4>
                <p className="text-gray-600 dark:text-gray-300">+91 **********</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <i className="fa-solid fa-location-dot text-4xl text-blue-500"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Your Company Address</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <i className="fa-solid fa-envelope text-4xl text-red-500"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">abc@ecommerce.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section (Stacked) */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}