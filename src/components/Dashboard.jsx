import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import StakeImg from "../assets/Stake.png";
import PPImg from "../assets/pp.png";
import GImg from "../assets/Gp.png";
import AImg from "../assets/Amazon.png";
import VImg from "../assets/Visa.png";
import BImg from "../assets/Bitcoin-Logo.png";
import LImg from "../assets/Litecoin.png";
import EImg from "../assets/etherum.png";
import DImg from "../assets/dogecoin.png";

const Dashboard = () => {
  const cashoutOptions = [
    { name: "Stake", min: "$0.10", image: StakeImg },
    { name: "PayPal", min: "$5", image: PPImg },
    { name: "Google Play", min: "$5", image: GImg },
    { name: "Amazon", min: "$23", image: AImg },
    { name: "Visa", min: "$5", image: VImg },
    { name: "Bitcoin", min: "$5", image: BImg },
    { name: "Litecoin", min: "$0.50", image: LImg },
    { name: "Ethereum", min: "$2.50", image: EImg },
    { name: "Dogecoin", min: "$1.50", image: DImg },
  ];

  const [feedback, setFeedback] = useState({});
  const handleFeedback = (index, emoji) => {
    setFeedback((prev) => ({ ...prev, [index]: emoji }));
  };

  const earningsData = [
    { day: "Mon", earnings: 10 },
    { day: "Tue", earnings: 15 },
    { day: "Wed", earnings: 5 },
    { day: "Thu", earnings: 12 },
    { day: "Fri", earnings: 20 },
    { day: "Sat", earnings: 18 },
    { day: "Sun", earnings: 8 },
  ];

  const streakDays = 5;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0f1d] via-[#1b1b2d] to-[#2d2d3b] text-white">
      <main className="px-6 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Cashout</h2>
        <p className="text-center mb-10">
          Redeem your earnings directly to PayPal, Amazon, Bitcoin, and more!
        </p>

        {/* Earnings Summary Panel */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-4">
            📈 Weekly Earnings Summary
          </h3>
          <div className="max-w-4xl mx-auto bg-[#1b1b2d] rounded-xl p-6 shadow-lg">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="day" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="earnings" fill="#4ade80" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-green-400">
              🔥 You're on a <span className="font-bold">{streakDays}-day</span> earning streak!
            </p>
          </div>
        </section>

        {/* Cashout Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cashoutOptions.map((option, index) => (
            <div
              key={index}
              className="bg-[#1b1b2d] p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
            >
              <img
                src={option.image}
                alt={option.name}
                className="mb-4 w-24 h-24 object-contain mx-auto"
              />
              <h3 className="text-lg font-bold text-center text-white">
                {option.name}
              </h3>
              <p className="text-center mt-2 text-gray-400">
                Minimum {option.min}
              </p>

              {/* Emoji Feedback */}
              <div className="flex justify-center mt-4 space-x-4 text-2xl">
                {["😐", "😍", "😡"].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => handleFeedback(index, emoji)}
                    className={`hover:scale-110 transition transform rounded-full px-2 ${
                      feedback[index] === emoji ? "bg-gray-700" : ""
                    }`}
                    title={`Give feedback: ${emoji}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

