import React, { useReducer, useContext} from 'react'
import reduce from './reduce'

const AppContext = React.createContext();


const initialState = {
  result : '',
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reduce, initialState)
  return (
    <AppContext.Provider value={...state}>
      {children}
    </AppContext.Provider>
  )
}
 
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export default AppProvider;