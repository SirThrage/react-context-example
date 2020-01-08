import React, { useContext } from 'react';
import { Context } from 'Components/Controller';

import './Panel.scss';

export default () => {
  const [ state, setState ] = useContext( Context );
  const { text } = state || {};

  return (
    <div className="panel">
      <h3>Panel</h3>
      <div>
        <span>Value:</span>
        <span>{ text }</span>
      </div>
      <input value={ text } onChange={ event => setState({ text: event.target.value }) } />
    </div>
  )
}