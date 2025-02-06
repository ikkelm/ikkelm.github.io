import React from "react";
import "./style.css"; // Import CSS

function App() {
  const handleClick = () => {
    alert("Hello!");
  };

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;