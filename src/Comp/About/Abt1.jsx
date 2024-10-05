import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Abt1() {

    useGSAP(() => {

        const tb1 = gsap.timeline();

        tb1.from(".abt1-top h1", {
            y: -20,
            opacity: 0,
        }, "hehe")

        tb1.from(".abt1-top p", {
            y: 20,
            opacity: 0,
        }, "hehe")


        const tb2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".abt1-mid",
                start: "top ",
                end: "bottom 50%%",
                scrub: 2,
            }
        })

        tb2.from(".abt1-btm p", {
            y: 20,
            opacity: 0,
            stagger: 0.2,

        })


    })
    return (
        <div className="abt1">
            <div className="abt1-top">
                <h1>WE ARE GYM AND FITNESS</h1>
                <p>More than just your average fitness retailer.</p>
            </div>
            <div className="abt1-mid">

            </div>
            <div className="abt1-btm">
                <h1>OUR STORY</h1>


                <p>At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.</p>
                <p>Two decades later, we are proud to have transformed Gym and Fitness into one of Australia's premier online retailers of fitness equipment. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.</p>
                <p>Our real success lies in the thousands of customers we've empowered to live longer, more joyful, and healthier lives. We're more than just a fitness company – we're your partners in health, your cheerleaders on the sideline, motivating you to reach your personal fitness goals. Embrace the fitness journey with us and see how it transforms your world.</p>
                <p>Join us in our mission to improve lives through fitness and wellness, because at Gym and Fitness, your health is our passion.</p>

                <button className='buttonn'> Join us</button>
            </div>




        </div>
    )
}

export default Abt1