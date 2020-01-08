import React, { createContext, useReducer } from 'react';

export const Context = createContext();

export default ({ children }) => {
  const { Provider } = Context;
  const [ state, setState ] = useReducer(( oldState, newState ) => ({ ...oldState, ...newState })); // Switch reducer?

  return (
    <Provider value={ [ state, setState ] }>
      { children }
    </Provider>
  )
}