import React from 'react';

export function CardLeft({ appNumber, totalApps, image }) {
  return (
    <div className="col-left">
      <div className="app-no">
        <span className="current">{`0${appNumber}`}</span>
        <span className="connector">of </span><br />
        <span className="total">{`0${totalApps}`}</span>
      </div>
      <img className="app-icon" src={image.src} alt={image.alt} height="120" width="120" />
    </div>
  )
}
