import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Spinner from './Spinner';
import SpinWheel from './SpinWheel'; 
import WsImg from "../assets/Ws.png";
import BJImg from "../assets/BJ.png";
import SBImg from "../assets/SB.png";
import PSImg from "../assets/PS.png";
import QSImg from "../assets/QS.png";
import TImg from "../assets/Timewall.png";
import mycImg from "../assets/mychips.png";
import MMImg from "../assets/MMwall.png";
import ADImg from "../assets/ADgem.png";
import BLImg from "../assets/Bitlabs.png";
import cpxImg from "../assets/cpx.png";
import YSImg from "../assets/YS.png";
import PImg from "../assets/prime-survey.png";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const dummyOffers = [
    {
      id: 1,
      image: WsImg,
      title: "Water Color Sorting",
      category: "Game",
      price: "$14.47",
      time: "15 min",
    },
    {
      id: 2,
      image: BJImg,
      title: "Blackjack 21",
      category: "Game",
      price: "$34.45",
      time: "25 min",
    },
    {
      id: 3,
      image: SBImg,
      title: "Summer Break",
      category: "Game",
      price: "$5.64",
      time: "10 min",
    },
  ];

  const dummySurveys = [
    {
      id: 1,
      image: PSImg,
      title: "Premium Survey",
      reward: "$1.00",
      duration: "7 min",
      locked: false,
    },
    {
      id: 2,
      image: QSImg,
      title: "Quick Survey",
      reward: "$0.75",
      duration: "5 min",
      locked: true,
    },
  ];

  return (
    <motion.section
      className="homepage min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Why waste time when you can Lootify it! <span className="text-blue-500">Real Cash</span>
        </h1>
        <p className="text-lg text-gray-300">
          Complete tasks, surveys, and offers to earn real money. Adapt to your style and get rewarded for your time.
        </p>
      </motion.div>

      {loading ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Spinner />
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition">
            Get Started
          </button>

          {/* Stats */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <div className="bg-gray-800 shadow-md p-4 rounded-lg text-center w-40">
              <p className="text-yellow-400 text-xl font-bold">$320K+</p>
              <p className="text-sm text-gray-300">Paid to Users</p>
            </div>
            <div className="bg-gray-800 shadow-md p-4 rounded-lg text-center w-40">
              <p className="text-yellow-400 text-xl font-bold">2.5M+</p>
              <p className="text-sm text-gray-300">Completed Tasks</p>
            </div>
            <div className="bg-gray-800 shadow-md p-4 rounded-lg text-center w-40">
              <p className="text-yellow-400 text-xl font-bold">250K+</p>
              <p className="text-sm text-gray-300">Active Users</p>
            </div>
          </div>

          {/* Games Section */}
          <motion.section
            className="mb-12 mt-10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gradient-to-r from-blue-400 to-purple-500 mb-4">🎮 Play & Earn Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dummyOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col"
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
                    <span className="text-sm text-black bg-yellow-400 px-2 py-1 rounded">
                      {offer.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{offer.category} • {offer.time}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Surveys Section */}
          <motion.section
            className="mb-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gradient-to-r from-blue-400 to-purple-500 mb-4">📝 Survey Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dummySurveys.map((survey) => (
                <div
                  key={survey.id}
                  className={`bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col ${survey.locked ? "opacity-50" : ""} hover:shadow-2xl transition`}
                >
                  <img
                    src={survey.image}
                    alt={survey.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{survey.title}</h3>
                    <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded">
                      {survey.reward}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{survey.duration} • Survey</p>
                  {survey.locked && (
                    <p className="mt-2 text-red-500 font-semibold">Locked</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Top Earning Partners Section */}
          <motion.section
            className="mb-12 w-full max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gradient-to-r from-blue-400 to-purple-500 mb-4">🤝 Top Earning Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[ 
                { id: 1, name: 'Partner 1', img: TImg },
                { id: 2, name: 'Partner 2', img: mycImg },
                { id: 3, name: 'Partner 3', img: MMImg },
                { id: 4, name: 'Partner 4', img: ADImg },
              ].map((partner) => (
                <div
                  key={partner.id}
                  className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition"
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-full h-28 object-contain rounded"
                  />
                  <h4 className="mt-4 font-semibold text-center text-white">{partner.name}</h4>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Trusted Survey Networks Section */}
          <motion.section
            className="mb-12 w-full max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gradient-to-r from-blue-400 to-purple-500 mb-4">📋 Trusted Survey Networks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[BLImg, cpxImg, YSImg, PImg].map((img, index) => (
                <div
                  key={index}
                  className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition"
                >
                  <img
                    src={img}
                    alt={`Survey Network ${index + 1}`}
                    className="w-full h-28 object-contain rounded"
                  />
                  <h4 className="mt-4 font-semibold text-center text-white">Survey Partner {index + 1}</h4>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Spin Wheel Feature */}
          <motion.section
            className="mb-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-gradient-to-r from-blue-400 to-purple-500 mb-4 text-center">
              🎡 Daily Spin Wheel
            </h2>
            <SpinWheel />
          </motion.section>

          {/* Help Button */}
          <motion.div
            className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <p className="text-xs">Help</p>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Homepage;
