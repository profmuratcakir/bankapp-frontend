import React, { createContext, useContext, useReducer } from "react";

// Creating context for global data
export const StateContext = createContext();

// Defining a method for getting context
// it returns state and dispatch
export const useStateValue = () => useContext(StateContext);

// Defining a method for StateContext.Provider
const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
