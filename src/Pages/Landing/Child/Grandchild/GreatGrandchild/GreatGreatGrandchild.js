import React from 'react';

export default ({ inheritedValue }) => (
  <div>
    <span>Great Great Grandchild</span>
    <span>Inherited value: <span className="inherited-value">{ inheritedValue }</span></span>
  </div>
)