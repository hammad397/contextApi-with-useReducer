import React from 'react'
import { useGlobalContext } from '../context/ContextProvider'

const Navbar = () => {
  const {state} = useGlobalContext()

  return (
    <nav className='navbar' style={{background: '#f0f0f0'}}>
      <div style={{maxWidth: '1200px', width: '90%', fontSize: '20px', display: 'flex', justifyContent: 'space-between', margin: '0 auto', padding: '0.8rem 0'}}>
      <span>Navbar</span>
      <span>Balance: {state}</span>
      </div>
    </nav>
  )
}

export default Navbar
