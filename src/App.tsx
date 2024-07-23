// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Body from "./layouts/Body";
// import HomePage from './pages/HomePage';
// import WatchlistPage from './pages/WatchlistPage';
// import HistoryPage from './pages/HistoryPage';
// import AccountPage from './pages/AccountPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/account" element={<AccountPage />} /> */}
        </Routes>
      </Body>
      <Footer />
    </Router>
  );
};

export default App;
