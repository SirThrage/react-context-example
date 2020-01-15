import React, { useContext } from 'react';
import { Context, ACTION } from 'Components/Controller';

import './Second.scss';
import { Link } from 'react-router-dom';

export default () => {
  const [ state, setState ] = useContext( Context )

  const { text } = state;

  const handleClick = () => setState({ action: ACTION.UPDATE_TEXT, value: '' });

  return (
    <div id="second">
      <p>This is another page!</p>
      <p>Our text value is '{ text }'</p>
      <button onClick={ handleClick }>Reset it!</button>
      <p><Link to="/">Go back</Link></p>
    </div>
  )
}
