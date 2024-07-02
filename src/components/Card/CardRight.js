import React from 'react';

import { Title } from '../shared/Title';
import { openTwitterShare } from './helpers';

export function CardRight({ app }) {
  const onShareTwitterClick = () => {
    openTwitterShare(app.tweet);
  };

  return (
    <div className="col-right">
      <div className="app-meta">
        <Title name={app.name} publisher={app.publisher} />
        <span className="app-lic">{app.price}</span>
      </div>
      <div className="app-intro" dangerouslySetInnerHTML={{ __html: app.desc }} />
      <hr />
      <div className="app-link">
        <a className="btn" href={app.link} target="_blank" rel="noreferrer noopener">Get App</a>
        <button type="button" className="ml-10 btn btn-twitter" onClick={onShareTwitterClick}>
          <span className="icon icon-inline icon-twitter-light"></span>
          Share on Twitter
        </button>
      </div>
    </div>
  )
}

