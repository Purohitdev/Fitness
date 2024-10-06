import React from 'react'
import Reg from './Auth/Reg'
import Login from './Auth/Login'
function Register() {
  return (
    <div className='resiter'>
        <div className="res">
            <div className="r1">
              <Reg />
            </div>
            <div className="r2">
                <Login />
                </div>
        </div>
    </div>
  )
}

export default Register