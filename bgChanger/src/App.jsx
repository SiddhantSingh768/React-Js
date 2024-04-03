import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("teal")}
          >
            Teal
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
