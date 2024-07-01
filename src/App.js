import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Breadcumb from './components/Breadcumb';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Widgets from './pages/Widgets';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
        <Breadcumb />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/widgets" element={<Widgets />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
