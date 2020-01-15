import React, { useContext } from 'react';
import { Context } from './../../Child';

export default () => {
  
  const [ inheritedValue, setInheritedValue ] = useContext( Context );

  return (
    <div>
      <span>Great Great Grandchild</span>
      <span>Inherited value: <span className="inherited-value">{ inheritedValue }</span></span>
    </div>
  )
}