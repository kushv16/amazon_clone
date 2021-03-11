import React,{useContext,createContext,useReducer} from "react"

//Creating a data layer
export const StateContext = createContext();

//building a provider (basically a function)

export function StateProvider({reducer,initialState,children})
{
  return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
  )
  
}

export const useStateValue = () => useContext(StateContext)