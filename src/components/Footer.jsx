import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p>
              We offer the best food in town with a rich variety of dishes to satisfy your taste buds. Come and enjoy a delightful dining experience.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2">
                <a href="tel:+123456789" className="hover:text-yellow-500">Phone: +1 234 567 89</a>
              </li>
              <li className="mb-2">
                <a href="mailto:info@restaurant.com" className="hover:text-yellow-500">Email: info@restaurant.com</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">123 Main Street, City</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-yellow-500">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-yellow-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-6" />

        <div className="text-center">
          <p>&copy; 2024 <span className="text-white text-xl font-bold font-[RubikMonoOne]">.FD</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
