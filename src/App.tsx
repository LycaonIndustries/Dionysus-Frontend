// src/App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Body from "./layouts/Body";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import History from "./pages/History";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import WatchList from "./pages/WatchList";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/history" element={<History />} />
          <Route path="/account" element={<Profile />} />
        </Routes>
      </Body>
      <Footer />
    </Router>
  );
};

export default App;
