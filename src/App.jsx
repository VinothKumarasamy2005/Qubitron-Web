import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TopLeftNavbar from './components/TopLeftNavbar';
import TechincalEvents from './components/TechincalEvents';
import NonTechnicalEvents from './components/NonTechnicalEvents';
import Footer from './components/Footer';
import CommitteMembers from './components/Committee/CommitteMembers';
import Timeline from './components/Utils/Timeline';
import AboutUs from './components/AboutUs/Aboutus';
import Home from './components/Home';
import ParticleBackground from './components/ParticleBackground';
import EventDetails from './components/EventDetails';
import OfflineEvents from './components/OfflineEvents';
import OnlineEvents from './components/OnlineEvents';
import WebDev from './components/Committee/WebDev';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
      <ParticleBackground />
        <div className="flex">
          <TopLeftNavbar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className={`w-full transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/techincal-events' element={<TechincalEvents />} />
              <Route path='/non-techincal-events' element={<NonTechnicalEvents />} />
              <Route path='/workshops' element={<NavBar />} />
              <Route path='/committee-members' element={<CommitteMembers />} />
              <Route path='/event-timeline' element={<Timeline isSidebarOpen={isSidebarOpen} />} />
              <Route path="/event-details" element={<EventDetails />} />
              <Route path="/offline-events" element={<OfflineEvents />} />
              <Route path="/online-events" element={<OnlineEvents />} />
              <Route path='/about-us' element={<AboutUs />} />
             <Route path='/web-devs' element={<WebDev/>} /> 
            </Routes>
            <br />
            <br />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
