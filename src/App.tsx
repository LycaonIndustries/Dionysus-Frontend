// Import React library for component creation
import React from "react";
// Import Route components and BrowserRouter as Router for routing
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import layout components
import Body from "./layouts/Body";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

// Import page components for routing
import History from "./pages/History";
import Home from "./pages/Home";
import { AuthForm } from "./pages/AuthForm";
import Profile from "./pages/Profile";
import WatchList from "./pages/WatchList";

// Define the main App component as a functional component with React.FC type
const App: React.FC = () => {
  // Render the application
  return (
    // Wrap the application with Router for enabling routing
    <Router>
      {/* Render the Header component */}
      <Header />
      {/* Render the Body component, which contains the main content area */}
      <Body>
        {/* Define the routes for the application */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the watchlist page */}
          <Route path="/watchlist" element={<WatchList />} />
          {/* Route for the history page */}
          <Route path="/history" element={<History />} />
          {/* Route for the profile/account page */}
          <Route path="/account" element={<Profile />} />
          <Route path="/auth/login" element={<AuthForm />} />
        </Routes>
      </Body>
      {/* Render the Footer component */}
      <Footer />
    </Router>
  );
};

// Export the App component as the default export
export default App;
