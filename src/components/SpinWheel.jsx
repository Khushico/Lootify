// src/components/SpinWheel.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import wheelImg from '../assets/spinwheel.png'; // Add your wheel image

const rewards = ['100 Coins', '50 Coins', 'Free Survey', 'Try Again', 'Spin Again', 'Surprise Gift'];

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const [reward, setReward] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const spinWheel = () => {
    if (spinning) return;
    const randomDeg = 3600 + Math.floor(Math.random() * 360); // More spins for drama
    const selectedReward = rewards[Math.floor(Math.random() * rewards.length)];
    setSpinning(true);
    setReward(null);
    setAngle((prev) => prev + randomDeg);

    setTimeout(() => {
      setReward(selectedReward);
      setSpinning(false);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {showConfetti && <Confetti />}
      <motion.div
        className="w-48 h-48 mb-4"
        animate={{ rotate: angle }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      >
        <img src={wheelImg} alt="Spin Wheel" className="w-full h-full" />
      </motion.div>
      <button
        onClick={spinWheel}
        disabled={spinning}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        {spinning ? "Spinning..." : "🎡 Spin Now!"}
      </button>

      <AnimatePresence>
        {reward && (
          <motion.div
            className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            🎉 You got: <strong>{reward}</strong>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpinWheel;
