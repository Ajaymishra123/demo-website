import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';

function AboutUsPage() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundAnimation />
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">About Us</h1>

          {/* Company History */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our History</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Software Co. started as a small team of passionate developers with a vision to
              transform businesses through technology. Over the years, we have grown into a leading software company,
              delivering innovative solutions to clients worldwide.
            </p>
            <p className="text-gray-700">
              Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence.
              We have successfully completed hundreds of projects, helping businesses across various industries to thrive
              in the digital age.
            </p>
          </section>

          {/* Mission and Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Mission and Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with cutting-edge software solutions that drive efficiency, innovation, and growth.
                  We are committed to providing exceptional services and building lasting partnerships with our clients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-700">
                  To be a globally recognized leader in software innovation, known for our commitment to quality,
                  customer satisfaction, and technological advancement. We aim to shape the future of technology and
                  make a positive impact on the world.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <img src="https://placehold.co/150x150" alt="Team Member 1" className="rounded-full mb-4 mx-auto" />
                <h4 className="font-bold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="text-center">
                <img src="https://placehold.co/150x150" alt="Team Member 2" className="rounded-full mb-4 mx-auto" />
                <h4 className="font-bold text-gray-800">Jane Smith</h4>
                <p className="text-sm text-gray-600">CTO</p>
              </div>
              {/* Team Member 3 */}
              <div className="text-center">
                <img src="https://placehold.co/150x150" alt="Team Member 3" className="rounded-full mb-4 mx-auto" />
                <h4 className="font-bold text-gray-800">David Lee</h4>
                <p className="text-sm text-gray-600">Lead Developer</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
