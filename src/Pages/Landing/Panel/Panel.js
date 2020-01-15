import React, { useContext } from 'react';
import { Context } from 'Components/Controller';

import './Panel.scss';

export default () => {
  const [ state, setState ] = useContext( Context );
  const { text } = state || {};

  const handleChange = event => setState({
    action: 'update-text',
    payload: event.target.value,
  });

  return (
    <div className="panel">
      <h3>Panel</h3>
      <div>
        <span>Value:</span>
        <span>{ text }</span>
      </div>
      <input value={ text } onChange={ handleChange } />
    </div>
  )
}