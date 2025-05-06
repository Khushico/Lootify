import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Rewards from './components/Rewards';
import LandingPage from './components/LandingPage'; // Landing page component
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page without navbar/footer */}
        <Route path="/" element={<LandingPage />} />

        {/* All other pages with navbar/footer */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 pt-20"> {/* Adjust pt-20 if your navbar height is ~80px */}
                <Routes>
                  {/* Update this route for homepage */}
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/profilepage" element={<ProfilePage />} />
                  <Route path="*" element={<div className="text-white p-8">404 - Page Not Found</div>} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
