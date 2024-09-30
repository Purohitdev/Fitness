import React from 'react'
import { FaPlay } from "react-icons/fa";


function Hero() {
  return (
    <>
    <div className="main">
        <div className="main-in">
        </div>
        <div className="upper-main">
            <div className="inner-main">
            <h1>Inside <br /> and out.</h1>
            <div className="bottom-main">
                <div className="main1">
                We are dedicated to helping you achieve your fitness goals and improve your overall health and well-being.
                </div>
                <div className="main2">
                    <p>3 min</p>
                    <div className="circle">
                    <FaPlay className='play'/>


                    </div>

                </div>

            </div>
            </div>

        </div>
    </div>

    </>
  )
}

export default Hero