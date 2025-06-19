import React, { useRef } from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaRegSmile, FaHeadset, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This was the best vacation experience I have ever had! Highly recommended.'
  },
  {
    name: 'Jane Smith',
    feedback: 'Beautiful locations, excellent service, and unforgettable memories.'
  },
  {
    name: 'Emily Johnson',
    feedback: 'A truly luxurious and relaxing getaway. Will visit again!'
  }
];

const counters = [
  { label: 'Happy Customers', value: 1200 },
  { label: 'Destinations', value: 35 },
  { label: 'Team Members', value: 50 }
];

const satisfactionData = [
  { label: 'Excellent', value: 70, color: 'bg-green-500' },
  { label: 'Good', value: 20, color: 'bg-blue-400' },
  { label: 'Average', value: 7, color: 'bg-yellow-400' },
  { label: 'Poor', value: 2, color: 'bg-orange-400' },
  { label: 'Very Poor', value: 1, color: 'bg-red-400' },
];

const features = [
  { icon: <RiCustomerService2Fill size={28} className="text-blue-600" />, text: '24/7 Customer Support' },
  { icon: <MdOutlineTravelExplore size={28} className="text-purple-600" />, text: 'Expert Travel Guidance' },
  { icon: <FaRegSmile size={28} className="text-yellow-500" />, text: 'Satisfaction Guaranteed' },
  { icon: <FaHeadset size={28} className="text-green-500" />, text: 'Personalized Assistance' },
  { icon: <FaRegStar size={28} className="text-pink-500" />, text: 'Top Rated Service' },
];

function RippleButton({ children }) {
  const btnRef = useRef(null);

  const createRipple = (event) => {
    const button = btnRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <div
      ref={btnRef}
      className="relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
      onClick={createRipple}
    >
      {children}
    </div>
  );
}

const Search = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-16 text-center">
      {/* Moving Customer Service Features Section */}
      <div className="overflow-hidden mb-10">
        <div className="flex w-max animate-marquee space-x-12">
          {features.map((feature, idx) => (
            <RippleButton key={idx}>
              <div className="flex items-center bg-white rounded-full shadow px-6 py-3 mx-2 min-w-max">
                {feature.icon}
                <span className="ml-3 font-medium text-gray-700 text-lg">{feature.text}</span>
              </div>
            </RippleButton>
          ))}
          {/* Repeat for seamless loop */}
          {features.map((feature, idx) => (
            <RippleButton key={idx + features.length}>
              <div className="flex items-center bg-white rounded-full shadow px-6 py-3 mx-2 min-w-max">
                {feature.icon}
                <span className="ml-3 font-medium text-gray-700 text-lg">{feature.text}</span>
              </div>
            </RippleButton>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(59, 130, 246, 0.3);
            pointer-events: none;
            z-index: 10;
          }
          @keyframes ripple {
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }
        `}</style>
      </div>
      {/* Counting Testing Member Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {counters.map((counter, idx) => (
          <div key={idx} className="bg-blue-100 rounded-lg py-8 shadow text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">{counter.value}</div>
            <div className="text-lg font-semibold">{counter.label}</div>
          </div>
        ))}
      </div>
      {/* Customer Satisfaction Graph */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
        <div className="space-y-3">
          {satisfactionData.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="w-28 text-left text-sm font-medium">{item.label}</span>
              <div className="flex-1 mx-2 h-6 rounded bg-gray-200 overflow-hidden">
                <div className={`${item.color} h-6`} style={{ width: `${item.value}%` }}></div>
              </div>
              <span className="w-10 text-right text-sm font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial Section */}
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
            <p className="italic mb-4">"{testimonial.feedback}"</p>
            <h4 className="font-semibold text-lg">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
