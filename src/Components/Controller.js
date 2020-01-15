import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const defaultState = {
  text: '',
}

export default ({ children }) => {
  const { Provider } = Context;

  const [ state, setState ] = useReducer(( oldState, { action, value }) => {
    switch ( action ) {
      case 'update-text':
        if ( typeof( value ) !== 'string' ) throw new Error( `Invalid value '${ value }' passed to action ${ action }` );
        return { ...oldState, text: value };
      default:
        throw new Error( `Unrecognized action: '${ action }'` );
    }
  }, defaultState );

  return (
    <Provider value={ [ state, setState ] }>
      { children }
    </Provider>
  )
}