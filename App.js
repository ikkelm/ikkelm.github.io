import React from "react";
import "./index.css"; // Import Tailwind styles

function App() {
  const handleClick = () => {
    alert("Hello!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Website
      </h1>
      <button 
        onClick={handleClick} 
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
