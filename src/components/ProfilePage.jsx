import React from "react";
import { FaCog, FaMoneyBillWave, FaGift, FaUsers, FaCalendarAlt } from "react-icons/fa";  // Added icons
import noOffImage from "../assets/nooff.png";  // Import image here

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0f1d] via-[#1b1b2d] to-[#2d2d3b] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-white">My Profile</h1>
        <button className="text-green-500 flex items-center gap-2 hover:underline text-xl">
          <FaCog /> Settings
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="bg-[#1b1b2d] p-6 rounded-lg flex-1 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 text-white rounded-full h-24 w-24 flex items-center justify-center text-4xl font-bold shadow-lg">
              A
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-400">abc</h2>
              <p className="text-sm text-gray-400">Joined 0D ago</p>
              <p className="text-sm text-green-400 mt-2">
                Level <span className="font-bold">0</span>
              </p>
              <div className="w-full h-2 bg-gray-700 rounded mt-1 overflow-hidden">
                <div className="h-full bg-green-500 w-0"></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">1000 coins to level up</p>
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="bg-[#1b1b2d] p-6 rounded-lg flex-1 grid grid-cols-2 gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <FaMoneyBillWave className="text-green-400 text-xl" />
              <p className="text-sm text-gray-400">Total Earnings</p>
            </div>
            <p className="text-lg font-semibold text-green-400">$0</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <FaGift className="text-blue-400 text-xl" />
              <p className="text-sm text-gray-400">Completed Offers</p>
            </div>
            <p className="text-lg font-semibold text-white">0</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <FaUsers className="text-purple-400 text-xl" />
              <p className="text-sm text-gray-400">Users Referred</p>
            </div>
            <p className="text-lg font-semibold text-white">0</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <FaCalendarAlt className="text-yellow-400 text-xl" />
              <p className="text-sm text-gray-400">Earnings (30 days)</p>
            </div>
            <p className="text-lg font-semibold text-green-400">$0</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-10">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Earnings in Progress
        </button>
        <button className="bg-[#1b1b2d] text-white px-6 py-3 rounded-lg hover:bg-[#2d2d3b] transition duration-300">
          Earnings
        </button>
        <button className="bg-[#1b1b2d] text-white px-6 py-3 rounded-lg hover:bg-[#2d2d3b] transition duration-300">
          Withdrawals
        </button>
      </div>

      {/* Info Message */}
      <div className="text-sm text-gray-400 mt-6">
        <span className="text-yellow-400 font-bold">!</span> Only featured offers are shown here.
        Your other offers can be found directly in the offer wall popups.
      </div>

      {/* No Offers Message */}
      <div className="mt-12 flex flex-col items-center justify-center bg-[#1b1b2d] rounded-lg p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={noOffImage}  // Use imported image here
          alt="No offers"
          className="w-28 h-28 mb-4 transition-transform transform hover:scale-110 duration-300"
        />
        <p className="text-center text-gray-400 text-xl">
          You have not started any featured offers in the last year
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transform hover:scale-105 transition duration-300">
          Start Earning →
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;