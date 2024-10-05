import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Abt3() {

    useGSAP(() => {

        const tb4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".abt3",
                start: "top 50% ",
                end: "bottom 90%%",
                scrub: 2,
            }
        })


        tb4.from(".abt2-end p", {
            y: 20,
            opacity: 0,
            stagger: 0.2,

        })

        tb4.from(".abt3-mid .abt3-box", {
            y: 20,
            opacity: 0,
            stagger: 0.2,

        })

    })


  return (
    <div className="abt3">
              <div className="abt2-end">
                <h1>OUR PEOPLE</h1>
                <p>Gym and Fitness is powered by a vibrant team of over 50 extraordinary individuals - our success springs from their collective efforts!</p>
                <p>Our team, a diverse mix of exceptional talent, work tirelessly to ensure your experience is unparalleled. They're the gears behind our operations - from sales, marketing and e-commerce, customer service, warehousing, finance, human resources, to R&D and management.</p>
                <p>If you're on the lookout for a growth-fostering role in an empowering, inclusive environment that values great work, than you should get in touch!</p>

                <button className='buttonn'> Register </button>
            </div>
            <div className="abt3-mid">
                <div className="abt3-box"></div>
                <div className="abt3-box"></div>
                <div className="abt3-box"></div>

            </div>
    </div>

  )
}

export default Abt3