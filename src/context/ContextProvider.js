import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { increment, decrement } from './actions';
import reducer from './reducers';

const Context = createContext();

const initialState = 2000;

const items = () => {
const items = localStorage.getItem('item')
 if(items){
    return JSON.parse(localStorage.getItem('item'))
 }else{
     return initialState
}
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState, items)

    const handleInc = val => dispatch(increment(val))

    const handleDec = val => dispatch(decrement(val))

    useEffect(() => localStorage.setItem('item', JSON.stringify(state)), [state])

  return (
    <Context.Provider value={{state, dispatch, handleInc, handleDec}}>
      {children}
    </Context.Provider>
  )
}

const useGlobalContext = () => {
    return useContext(Context)
}

export {ContextProvider, useGlobalContext}