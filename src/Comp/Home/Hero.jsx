import React from 'react'
import { FaPlay } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Hero() {

  useGSAP(() => {

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top 0",
        end: "bottom",
        scrub: 2,
      }
    })

    t2.from(".sec1 img , .sec1 h1 ,.sec1 p ",{
      x:20,
      opacity:0,
      stagger:0.2,

    })



  })
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