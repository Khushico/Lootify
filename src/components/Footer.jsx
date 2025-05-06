import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Lootify</h3>
          <p className="text-gray-400">
            Lootify is a platform where users can earn money and rewards by
            completing tasks, surveys, and offers, with quick payout options
            like gift cards, PayPal, and cryptocurrencies.
          </p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
            Get it on Google Play
          </button>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul>
            <li className="mb-2">
              <a href="/earn" className="text-gray-400 hover:text-white">
                Earn
              </a>
            </li>
            <li className="mb-2">
              <a href="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="/rewards" className="text-gray-400 hover:text-white">
                Rewards
              </a>
            </li>
            <li className="mb-2">
              <a href="/help" className="text-gray-400 hover:text-white">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Business */}
        <div>
          <h3 className="text-xl font-bold mb-4">Business</h3>
          <ul>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="/affiliates" className="text-gray-400 hover:text-white">
                Affiliates
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/advertise"
                className="text-gray-400 hover:text-white"
              >
                Advertise with us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Footer Bottom */}
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          Terms of Service | Privacy Policy | Cookie Policy | © Lootify 2025
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

