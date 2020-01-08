import React, { useContext, useEffect } from 'react';
import { Context } from 'Components/Controller';
import { Panel } from '.';

import './Landing.scss';

export default () => {
  const [ state, setState ] = useContext( Context );
  const { text } = state || {};

  useEffect(() => {
    setState({ text: 'Landing page component mounted' });
  }, [ setState ] );

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      <span>text value: '{ text }'</span>
      <Panel />
    </div>
  )
}