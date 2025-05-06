import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Rewards = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const future = new Date(Date.now() + 5 * 60000); // 5 minutes from now
      setTasks([
        {
          id: 1,
          title: 'Epic Gaming Task',
          description: 'Play and earn $5.',
          rarity: 'Epic',
          expiresAt: future,
        },
        {
          id: 2,
          title: 'Survey Task',
          description: 'Earn $2 for answering questions.',
          rarity: 'Common',
        },
        {
          id: 3,
          title: 'Limited Time Offer',
          description: 'Earn $3 now!',
          rarity: 'Rare',
          expiresAt: new Date(Date.now() + 2 * 60000),
        },
      ]);

      setHistory([]); // Test with empty history to show fallback UI
      setLoading(false);
    }, 1500);
  }, []);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Epic': return 'bg-purple-600 text-white';
      case 'Rare': return 'bg-blue-500 text-white';
      case 'Common':
      default: return 'bg-gray-300 text-gray-800';
    }
  };

  const formatTimeLeft = (expiresAt) => {
    const now = new Date();
    const diff = Math.max(0, expiresAt - now);
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return `${mins}m ${secs}s`;
  };

  return (
    <section className="min-h-screen px-6 py-8 bg-gradient-to-r from-[#0f0f1d] via-[#1b1b2d] to-[#2d2d3b] text-white">
      <h2 className="text-3xl font-bold mb-6">Your Reward History</h2>

      {loading ? (
        <Spinner />
      ) : history.length > 0 ? (
        <div className="space-y-4 mb-12">
          {history.map((item) => (
            <div key={item.id} className="p-4 rounded-lg bg-white shadow-md flex justify-between items-center text-gray-800">
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
              <span className="text-green-600 font-bold">{item.earned}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mb-12">
          <h4 className="text-xl font-semibold mb-2">No rewards till now 😔</h4>
          <p className="text-gray-400 mb-4">Let's change that! Complete a task and make your first earning 🎯</p>
          <img src="ad-placeholder.png" alt="Ad Banner" className="w-full max-w-md mx-auto rounded-lg" />
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6">🔥 Available Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <div key={task.id} className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition text-gray-800">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <span className={`text-sm px-3 py-1 rounded-full ${getRarityColor(task.rarity)}`}>{task.rarity}</span>
            </div>
            <p className="font-semibold">{task.description}</p>
            {task.expiresAt && (
              <p className="text-sm text-red-600 mt-2">⏳ {formatTimeLeft(task.expiresAt)} left</p>
            )}
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Start Task</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rewards;
