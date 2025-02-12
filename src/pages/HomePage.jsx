import React from 'react';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div>
      {/* Hero Section with Background Animation */}
      <section className="relative bg-gray-100 py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-8 text-gray-800">
            Innovating Software Solutions for a Better Future
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We craft high-quality software to solve complex problems and drive business growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://placehold.co/600x400" alt="Company Introduction" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:ml-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Company</h2>
            <p className="text-gray-700 mb-6">
              We are a software company dedicated to developing innovative and reliable solutions.
              With years of experience, our team of experts is passionate about technology and committed to
              delivering excellence. We partner with businesses of all sizes to help them achieve their goals
              through custom software development.
            </p>
            <p className="text-gray-700">
              Our core values are innovation, quality, and customer satisfaction. We strive to exceed expectations
              in every project and build long-term relationships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">
                {/* Replace with an actual icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244H17.25m-15.75 0H3.75a2.25 2.25 0 002.012-1.244l.256-.512a2.25 2.25 0 012.013-1.244H16.5m-15.75 0H18.75a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244H21.75m-4.5 0H21a2.25 2.25 0 002.012-1.244l.256-.512a2.25 2.25 0 012.013-1.244H21.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
              <p className="text-gray-700 mb-4">
                Crafting responsive and dynamic websites tailored to your business needs.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More</button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">
                {/* Replace with an actual icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3h4.5m-4.5 0a7.5 7.5 0 017.5 7.5v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9a7.5 7.5 0 017.5-7.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Mobile App Development</h3>
              <p className="text-gray-700 mb-4">
                Developing native and cross-platform mobile applications for iOS and Android.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More</button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">
                {/* Replace with an actual icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75-3.75h.008v.008h-.008V6.75zm.75 3.75V9.75a3 3 0 016 0v.75m-6 0h.008v.008H9.75V9.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Cloud Solutions</h3>
              <p className="text-gray-700 mb-4">
                Providing scalable and secure cloud infrastructure and services.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "Working with Software Co. has been a game-changer for our business. Their expertise and dedication are unmatched."
              </p>
              <div className="flex items-center justify-center">
                <img src="https://placehold.co/50x50" alt="Client 1" className="rounded-full mr-4" />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">John Doe</h4>
                  <p className="text-sm text-gray-600">CEO, Company A</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "The team at Software Co. is incredibly talented and professional. They delivered our project on time and exceeded our expectations."
              </p>
              <div className="flex items-center justify-center">
                <img src="https://placehold.co/50x50" alt="Client 2" className="rounded-full mr-4" />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Marketing Manager, Company B</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "We are extremely satisfied with the software solutions provided by Software Co. Their support and maintenance are top-notch."
              </p>
              <div className="flex items-center justify-center">
                <img src="https://placehold.co/50x50" alt="Client 3" className="rounded-full mr-4" />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">David Lee</h4>
                  <p className="text-sm text-gray-600">CTO, Company C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
