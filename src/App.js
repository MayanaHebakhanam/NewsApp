import './App.css';
import { NewsProvider } from './Context';
import { Home } from './pages/Home.js';
import React from 'react';
import NewsFeed, { MobilePreview } from './pages/NewsFeed.js'
import { ManageFeed } from './pages/ManageFeed.js'
import PerformanceReport from './pages/PerformanceReport.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <NewsProvider>
          <Home/>
          <Routes>
            <Route path="/newsfeed" Component={NewsFeed}  />
            <Route path="/manageFeed"  component={<ManageFeed />} />
            <Route path="/performanceReport" component={PerformanceReport} />
          </Routes>
        </NewsProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
