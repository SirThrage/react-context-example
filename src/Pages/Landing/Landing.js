import React from 'react';
import { Panel, Child } from '.';

import './Landing.scss';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      <Panel />
      <Child />
      <Link to="/second">
        Go to second page
      </Link>
    </div>
  )
}
