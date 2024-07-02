import React from 'react';

import { CardLeft } from './CardLeft';
import { CardRight } from './CardRight';

export function Card({ app, appNumber, totalApps }) {
  return (
    <div className="app-card" key={app.name}>
      <CardLeft image={app.img} appNumber={appNumber} totalApps={totalApps} />
      <CardRight app={app} />
    </div>
  );
}
