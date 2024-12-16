import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import MainContent from "./components/MainContent";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }
  return (
  // <Router>
    <div className={isDarkMode ? "dark" : ""}>
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        {/* <MainContent /> */}
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/settings" element={<Settings />} />

        </Routes>
        </div>
      </div>
    </div>
    </div>
    // </Router>
  );
};

export default App;

