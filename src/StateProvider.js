import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children} 
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// {children} - is our app
// reducer - listening to any action
// initial State - data layer