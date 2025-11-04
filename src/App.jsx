import React from 'react';
import BackgroundDecor from './components/BackgroundDecor';
import InvitationCard from './components/InvitationCard';
import OrnamentDivider from './components/OrnamentDivider';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <BackgroundDecor>
      <InvitationCard />
      <div className="mx-auto max-w-5xl px-6">
        <OrnamentDivider />
      </div>
      <SiteFooter />
    </BackgroundDecor>
  );
}
