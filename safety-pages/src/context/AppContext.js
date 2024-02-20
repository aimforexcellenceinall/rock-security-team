import React, { createContext, useReducer } from "react"

export const AppContext = createContext()

const initialState = {
  // Initial state here
}

const reducer = (state, action) => {
  switch (action.type) {
    // Define reducer cases
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}