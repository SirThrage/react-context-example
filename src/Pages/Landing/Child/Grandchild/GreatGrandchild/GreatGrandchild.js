import React from 'react';
import GreatGreatGrandchild from './GreatGreatGrandchild';

export default ({ inheritedValue }) => (
  <div>
    <span>Great Grandchild</span>
    <GreatGreatGrandchild inheritedValue={ inheritedValue } />
  </div>
)