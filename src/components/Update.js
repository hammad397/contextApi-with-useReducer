import React from 'react'
import { useGlobalContext } from '../context/ContextProvider'

const Update = () => {
  const {handleInc, handleDec} = useGlobalContext()

  return (
    <div className='update' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <button style={{fontSize: '20px', padding: '0.7rem', cursor: 'pointer'}} onClick={() => handleDec(200)}>-</button>
      <span style={{fontSize: '20px', padding: '0 1rem'}}>Update</span>
      <button style={{fontSize: '20px', padding: '0.7rem', cursor: 'pointer'}} onClick={() => handleInc(200)}>+</button>
    </div>
  )
}

export default Update







