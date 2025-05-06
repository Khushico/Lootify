import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import TikTokImg from "../assets/tiktok.png";
import DiceImg from "../assets/dice-dreams.png";
import NetflixImg from "../assets/netflix.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Navigate to Homepage instead of signup
    navigate("/home");
  };

  const offerCards = [
    {
      title: "Netflix",
      subtitle: "Start a trial month",
      price: "$5.00",
      image: NetflixImg,
    },
    {
      title: "Dice Dreams",
      subtitle: "Reach level 10",
      price: "$14.70",
      image: DiceImg,
    },
    {
      title: "TikTok",
      subtitle: "Sign up",
      price: "$2.00",
      image: TikTokImg,
    },
  ];

  return (
    <div className="landing-page min-h-screen flex flex-col items-center pt-32 px-6 bg-[#0f0f1d] text-white relative">
      
      {/* Top Header */}
      <div className="w-full fixed top-0 left-0 z-50 bg-[#1b1b2d] border-b border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold tracking-wide">
            Lootify
          </h2>
          <div className="text-sm text-gray-400 animate-pulse">
            Cashout via: PayPal • Amazon • Bitcoin
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
        Get <span className="text-green-500">paid</span> for testing apps, <br />
        games & surveys
      </h1>
      <p className="mt-2 text-lg text-gray-400 text-center">
        Earn up to <span className="text-white font-bold">$14.70</span> per offer •{" "}
        <span className="text-green-500">346</span> Offers available now
      </p>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl mt-10 gap-8">
        
        {/* Offer Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {offerCards.map((item, index) => (
            <div
              key={index}
              className="offer-card bg-[#1b1b2d] p-6 rounded-xl text-left shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-full object-contain mx-auto mb-4 rounded"
              />
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
              <p className="mt-2 text-green-400 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Sign-Up Card with Glassmorphism */}
        <div className="signup-card bg-[#1b1b2d] bg-opacity-60 p-8 rounded-lg w-full max-w-sm text-center shadow-2xl backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300">
          <h2 className="text-xl font-bold mb-4 text-white">Sign Up for Free</h2>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 mb-4 rounded-lg bg-[#0f0f1d] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleRedirect}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start earning now
          </button>

          <div className="my-4 border-t border-gray-600 relative">
            <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-[#1b1b2d] px-2 text-gray-400 text-sm">
              OR
            </span>
          </div>

          <button
            onClick={handleRedirect}
            className="w-full bg-white text-black font-bold py-2 rounded-lg flex items-center justify-center gap-2 mb-2 transition-all duration-300 transform hover:scale-105"
          >
            <FaGoogle /> Sign Up with Google
          </button>

          <button
            onClick={handleRedirect}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <FaFacebookF /> Sign Up with Facebook
          </button>

          <p className="text-gray-400 text-sm mt-3">48865+ sign-ups in the past 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
