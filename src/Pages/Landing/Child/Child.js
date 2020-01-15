import React, { useState } from 'react';
import Grandchild from './Grandchild';

import './Child.scss';

export default () => {
  // No need for all this drilling! Let's clean it up by using a context.

  const [ inheritedValue, setInheritedValue ] = useState( '' );

  return (
    <div class="child">
      <span>Child</span>
      <label>
        Value to inherit:
        <input value={ inheritedValue } onChange={ ({ target: { value } }) => setInheritedValue( value ) } />
      </label>
      <Grandchild inheritedValue={ inheritedValue } />
    </div>
  );
}