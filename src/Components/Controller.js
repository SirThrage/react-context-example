import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const defaultState = {
  text: '',
}

export default ({ children }) => {
  const { Provider } = Context;

  const [ state, setState ] = useReducer(( oldState, { action, payload }) => {
    switch ( action ) {
      case 'update-text':
        return { ...oldState, text: payload };
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