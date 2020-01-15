import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <Link to="/">Home</Link>
    <div>
      <Link to="/clip/0">Think Locally</Link>
      <Link to="/clip/1">Think Globally</Link>
    </div>
  </header>
)