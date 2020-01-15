import React, { useContext, useEffect } from 'react';
import { Context } from 'Components/Controller';
import { Panel } from '.';

import './Landing.scss';
import { Link } from 'react-router-dom';

export default () => {
  const [ state, setState ] = useContext( Context );
  const { text } = state;

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      <span>text value: '{ text }'</span>
      <Panel />
      <Link to="/second">
        Go to second page
      </Link>
    </div>
  )
}
