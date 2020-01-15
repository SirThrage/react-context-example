import React, { useContext } from 'react';
import { Context } from 'Components/Controller';

import './Panel.scss';

export default () => {
  const [ state, setState ] = useContext( Context );
  const { text } = state || {};

  const handleChange = ({ target: { value } }) => setState({
    action: 'update-text',
    value,
  });

  return (
    <div className="panel">
      <h3>Panel</h3>
      <div>
        <span>Value:</span>
        <span>&nbsp;{ text }&nbsp;</span>
      </div>
      <input value={ text } onChange={ handleChange } />
    </div>
  )
}