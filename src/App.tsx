import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OpenSourceDwelling } from './components/OpenSourceDwelling';
import { Guide } from './components/Guide';
import { DefensiveFeatures } from './components/DefensiveFeatures';
import { ResilientDesign } from './components/ResilientDesign';
import { FireResistance } from './components/FireResistance';
import { WaterManagement } from './components/WaterManagement';
import { EnergySystems } from './components/EnergySystems';
import { EnvironmentalControl } from './components/EnvironmentalControl';
import { Construction } from './components/Construction';
import { CommunityResilience } from './components/CommunityResilience';
import { MissionContact } from './components/MissionContact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Navigation />
      <main>
        <Hero />
        <OpenSourceDwelling />
        <Guide />
        <DefensiveFeatures />
        <ResilientDesign />
        <FireResistance />
        <WaterManagement />
        <EnergySystems />
        <EnvironmentalControl />
        <Construction />
        <CommunityResilience />
        <MissionContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;