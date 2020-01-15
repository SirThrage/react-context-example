import React from 'react';
import GreatGrandchild from './GreatGrandchild';

export default ({ inheritedValue }) => (
  <div>
    <span>Grandchild</span>
    <GreatGrandchild inheritedValue={ inheritedValue } />
  </div>
)