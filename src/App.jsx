import React from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Domain from "./pages/Domain";
import Home from "./pages/Home";
import { Maps } from "./pages/Maps";
import InfoSection from './pages/InfoSection';
import Prize from './pages/Prize';
import Sponsors from './pages/Sponsors';
import { Stdcoord } from './pages/Stdcoord';
import CustomizedTimeline from './pages/Timeline';
import ParticlesComponent from "./components/Particles";
import "./App.css";
import Venue from './pages/Venue';

function App() {
  return (
    <div className='hideSc'>
      <Navbar />
      <div className='p-4'>
        <ParticlesComponent id="particles" />
        <div className='md:pt-0'>
          <Home />
        </div>
        <div className="my-8"> {/* Adjust spacing */}
          <Prize />
        </div>
        <div className="my-8"> {/* Adjust spacing */}
          <Domain />
        </div>
        <div className="my-2"> {/* Adjust spacing */}
          <InfoSection />
        </div>
        <div className="my-8"> {/* Adjust spacing */}
          <CustomizedTimeline />
        </div>
        <div className="my-8"> {/* Adjust spacing */}
          <Stdcoord />
        </div>
        <div className="my-8"> {/* Adjust spacing */}
          <Sponsors />
        </div>
        <div className="my-20"> {/* Adjust spacing */}
          <Venue />
        </div>
        <div className="my-20"> {/* Adjust spacing */}
          <Maps />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
