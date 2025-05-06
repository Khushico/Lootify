import React from 'react';
import { FaSyncAlt } from 'react-icons/fa'; // or any icon you want

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <FaSyncAlt className="text-green-500 text-6xl animate-spin" />
    </div>
  );
};

export default Spinner;
