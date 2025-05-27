import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

// Components
import Navbar from './components/Navbar';
import EmergencyRibbon from './components/EmergencyRibbon';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';
import Booking from './pages/Booking';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';

// Service Pages
import GeneralDentistry from './pages/services/GeneralDentistry';
import CosmeticDentistry from './pages/services/CosmeticDentistry';
import Orthodontics from './pages/services/Orthodontics';
import PediatricDentistry from './pages/services/PediatricDentistry';
import OralSurgery from './pages/services/OralSurgery';
import RootCanalTreatment from './pages/services/RootCanalTreatment';

// Protected Route Components
const AdminRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = currentUser && currentUser.role === 'admin';
  return isAdmin ? children : <Navigate to="/login" />;
};

const ClientRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const isClient = currentUser && currentUser.role === 'client';
  return isClient ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <EmergencyRibbon />
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Service Routes */}
          <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/services/pediatric-dentistry" element={<PediatricDentistry />} />
          <Route path="/services/oral-surgery" element={<OralSurgery />} />
          <Route path="/services/root-canal-treatment" element={<RootCanalTreatment />} />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          
          {/* Client Routes */}
          <Route
            path="/client/dashboard"
            element={
              <ClientRoute>
                <ClientDashboard />
              </ClientRoute>
            }
          />
          
          {/* Redirects */}
          <Route path="/admin/*" element={<Navigate to="/login" />} />
          <Route path="/client/*" element={<Navigate to="/login" />} />
        </Routes>
        <LiveChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
