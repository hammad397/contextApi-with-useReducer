import React from 'react'
import Navbar from './components/Navbar'
import Update from './components/Update'
import { ContextProvider } from './context/ContextProvider'

const App = () => {
  return (
    <ContextProvider>
    <Navbar/> 
    <Update/>
    </ContextProvider>
  )
}

export default App
