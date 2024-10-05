import React from 'react'
import As from "../../Ass/star.avif"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Link } from 'react-router-dom'


function Sec1() {

    useGSAP(() => {


        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec1",
                start: "top 0",
                end: "bottom",
                scrub: 3,
            }
        })

        t3.from(".top-sec2 h1 , .top-right  ", {
            y: 20,
            opacity: 0,
            stagger: 0.5,

        })

        t3.from(".box",{
            y: 20,
            opacity: 0,
            stagger: 0.2,
    

        })
   


    })
    return (
        <div className='sec1'>
            <div className="sec1-mid">
                <img src={As} alt="" />
                <h1>FITNESS SHOULD BE <br /> ACCESSIBLE TO EVERYONE</h1>
                <p> Whether you're a seasoned athlete or just starting out, we have a
                    variety of equipment and classes to suit your needs. Our cardio
                    machines, weight lifting equipment, and functional training areas
                    provide a comprehensive workout experience.</p>
                <button className='button' >  
                <Link className="nav-link" to="/contact" >Join today</Link>
                </button>

            </div>

        </div>
    )
}

export default Sec1