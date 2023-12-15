import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company Info</h3>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          <p>Address: 123 Main St, Cityville, Country</p>
          <p>Email: info@example.com | Phone: +1 (123) 456-7890</p>
        </div>

        {/* Section 2: Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Section 3: Navigation Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Section 4: Subscription Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          {/* Include your subscription form here */}
          <form>{/* Add your form fields, e.g., email input, subscribe button, etc. */}</form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
