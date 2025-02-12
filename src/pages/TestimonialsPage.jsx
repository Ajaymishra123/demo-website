import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';

function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Working with Software Co. has been a game-changer for our business. Their expertise and dedication are unmatched.",
      clientName: "John Doe",
      clientTitle: "CEO, Company A",
      clientImage: "https://placehold.co/75x75",
    },
    {
      quote: "The team at Software Co. is incredibly talented and professional. They delivered our project on time and exceeded our expectations.",
      clientName: "Jane Smith",
      clientTitle: "Marketing Manager, Company B",
      clientImage: "https://placehold.co/75x75",
    },
    {
      quote: "We are extremely satisfied with the software solutions provided by Software Co. Their support and maintenance are top-notch.",
      clientName: "David Lee",
      clientTitle: "CTO, Company C",
      clientImage: "https://placehold.co/75x75",
    },
    {
      quote: "Software Co. truly understands our needs and provides solutions that are both innovative and practical. Highly recommended!",
      clientName: "Sarah Johnson",
      clientTitle: "Project Manager, Company D",
      clientImage: "https://placehold.co/75x75",
    },
    {
      quote: "The level of communication and collaboration with Software Co. is exceptional. They made the entire development process smooth and efficient.",
      clientName: "Michael Brown",
      clientTitle: "Operations Director, Company E",
      clientImage: "https://placehold.co/75x75",
    },
    {
      quote: "Choosing Software Co. was one of the best decisions we made for our tech infrastructure. Their solutions are robust and reliable.",
      clientName: "Emily Wilson",
      clientTitle: "Head of IT, Company F",
      clientImage: "https://placehold.co/75x75",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <BackgroundAnimation />
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-12 text-gray-800">Client Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center">
                  <img src={testimonial.clientImage} alt={testimonial.clientName} className="rounded-full mr-4" />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-800">{testimonial.clientName}</h4>
                    <p className="text-sm text-gray-600">{testimonial.clientTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;
