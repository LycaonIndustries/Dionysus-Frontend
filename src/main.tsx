// Import the React library
import React from "react";
// Import the ReactDOM client for rendering React components
import ReactDOM from "react-dom/client";
// Import the main App component from the App.tsx file
import App from "./App.tsx";
// Import global styles from the index.css file
import "./styles/index.css";

// Render the React application into the DOM element with the id 'root'
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Enable StrictMode to help identify potential problems in the application
  <React.StrictMode>
    {/* Render the main App component */}
    <App />
  </React.StrictMode>
);
