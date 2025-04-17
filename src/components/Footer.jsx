import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-16 py-10 text-sm">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 border-b border-gray-700 pb-6">
        {/* Newsletter */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">BE THE FIRST TO KNOW</h3>
          <p className="mb-4 text-gray-400">Sign up for updates from mettà muse.</p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="px-3 py-2 w-full sm:w-[300px] text-black outline-none"
            />
            <button className="bg-gray-800 text-white px-4 py-2 mt-2 sm:mt-0 sm:ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">CONTACT US</h3>
          <p className="text-gray-400">+44 221 133 5380</p>
          <p className="text-gray-400 mb-4">customercare@mettamuse.com</p>
          <h3 className="font-semibold mb-1">CURRENCY</h3>
          <p className="text-gray-400">USD 🇺🇸</p>
          <p className="text-gray-500 text-xs mt-1">
            Transactions will be completed in Euros and a currency reference is available at checkout.
          </p>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
        {/* Left Column */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">mettā muse</h4>
          <ul className="space-y-1 text-gray-400">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Center Column */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">QUICK LINKS</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h4 className="font-semibold mb-2">FOLLOW US</h4>
            <div className="flex gap-4">
              <Instagram className="cursor-pointer" />
              <Linkedin className="cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">mettā muse ACCEPTS</h4>
            <div className="flex gap-2 flex-wrap">
              <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="gpay" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="apple pay" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 mt-6">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
