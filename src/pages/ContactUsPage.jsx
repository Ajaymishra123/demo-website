import React from 'react';
import { useForm } from 'react-hook-form';
import BackgroundAnimation from '../components/BackgroundAnimation';

function ContactUsPage() {
  const formMethods = useForm(); // Call useForm and store the result
  const { register, handleSubmit, formState: { errors } } = formMethods; // Destructure in separate lines

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to a backend API
    alert('Form submitted successfully!');
  };

  return (
    <div className="relative overflow-hidden">
      <BackgroundAnimation />
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information and Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Office</h2>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong> 123 Main Street, Cityville, State, 12345
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> info@softwareco.com
              </p>
              {/* Placeholder for Google Map */}
              <div className="bg-gray-200 h-48 rounded-lg">
                <p className="text-center text-gray-600 py-20">Google Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
