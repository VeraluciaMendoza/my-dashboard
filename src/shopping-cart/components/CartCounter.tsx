'use client'
import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 7 }) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl">{count}</span>

      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="flex flex-center items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="flex flex-center items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
