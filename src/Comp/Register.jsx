import React from 'react'
import Reg from './Auth/Reg'
import Login from './Auth/Login'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='resiter'>
        <div className="res">
            <div className="r1">
              <Reg />

            </div>
      
        </div>
    </div>
  )
}

export default Register