import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';

function ServicesPage() {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244H17.25m-15.75 0H3.75a2.25 2.25 0 002.012-1.244l.256-.512a2.25 2.25 0 012.013-1.244H16.5m-15.75 0H18.75a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244H21.75m-4.5 0H21a2.25 2.25 0 002.012-1.244l.256-.512a2.25 2.25 0 012.013-1.244H21.75" /></svg>,
      title: 'Web Development',
      description: 'We build responsive, user-friendly, and high-performance websites tailored to your business objectives. From e-commerce platforms to corporate sites, we handle it all.',
      learnMoreLink: '/services/web-development',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3h4.5m-4.5 0a7.5 7.5 0 017.5 7.5v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9a7.5 7.5 0 017.5-7.5z" /></svg>,
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile applications for iOS and Android. We focus on creating engaging and intuitive mobile experiences for your users.',
      learnMoreLink: '/services/mobile-app-development',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75-3.75h.008v.008h-.008V6.75zm.75 3.75V9.75a3 3 0 016 0v.75m-6 0h.008v.008H9.75V9.75z" /></svg>,
      title: 'Cloud Solutions',
      description: 'Leverage the power of the cloud with our comprehensive cloud solutions. We offer setup, migration, and management services to ensure scalability and security.',
      learnMoreLink: '/services/cloud-solutions',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.124 1.977l-.218.08a2.25 2.25 0 01-2.928-.2l-5.108-3.083a2.25 2.25 0 01-2.928-.2L9.503 9.77a2.25 2.25 0 01-2.928-.2l-5.108-3.083a2.25 2.25 0 01-2.928-.2l-.218.08A2.25 2.25 0 013 12.703v3.75m16.5 3.75V16.5a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v3.75m16.5 3.75H3" /></svg>,
      title: 'AI and ML Services',
      description: 'Implement cutting-edge AI and Machine Learning solutions to automate processes, gain insights, and drive innovation in your business.',
      learnMoreLink: '/services/ai-ml',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-6.75-7.5h3.75m3.75 2.25h-3.75m3.75 2.25h3.75" /></svg>,
      title: 'Custom Software Development',
      description: 'Get tailor-made software solutions designed specifically for your unique business needs. We ensure scalability, efficiency, and seamless integration.',
      learnMoreLink: '/services/custom-software',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M15.036 6.06m-4.5 0a4.5 4.5 0 119 0 4.5 4.5 0 11-9 0M12.03 19.532V23l-3.008-3.008c-6.172-6.172-6.172-16.208 0-22.38 6.173-6.172 16.208-6.172 22.38 0 6.172 6.172 6.172 16.208 0 22.38L15.03 23v-3.468m-2.99-3.007l-1.199-1.2" /></svg>,
      title: 'IT Consulting',
      description: 'Benefit from our expert IT consulting services to optimize your technology strategy, infrastructure, and operations. Drive better business outcomes with informed decisions.',
      learnMoreLink: '/services/it-consulting',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <BackgroundAnimation />
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <a href={service.learnMoreLink} className="text-blue-600 hover:text-blue-800 font-semibold">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
