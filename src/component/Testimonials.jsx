import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials container mx-auto my-8 p-8 dark-theme">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="testimonial-card bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-300 italic mb-4">
            "I've had an amazing experience with this wellness program. It has truly transformed my life."
          </p>
          <span className="font-bold text-blue-500">- Rakesh Jaiswal, 45</span>
        </div>
        <div className="testimonial-card bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-300 italic mb-4">
            "The wellness program exceeded my expectations. I feel healthier and more energized."
          </p>
          <span className="font-bold text-blue-500">- Kusum Jaiswal, 41</span>
        </div>
        <div className="testimonial-card bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-300 italic mb-4">
            "Very Good."
          </p>
          <span className="font-bold text-blue-500">- Satyam, 23</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
