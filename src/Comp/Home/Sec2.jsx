import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Sec2() {

    useGSAP(() => {

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec3",
                start: "top 0",
                end: "bottom",
                scrub: 3,
                markers: true,
            }
        })

 


    })
    return (
        <div className='sec2'>
            <div className="top-sec2">
                <div className="top-left">
                    <h1>Trainings</h1>

                </div>
                <div className="top-right">
                    <p>see all</p>
                    <div className="small-circle">
                        <GoArrowUpRight className='down-arrow' />


                    </div>

                </div>
            </div>
            <div className="bottom-sec2">
                <div className="box">
                    <div className="hover">
                        <div className="h1">
                            <p>personal training</p>

                        </div>
                        <div className="h2">
                            <div className="small-circle">
                                <GoArrowUpRight className='down-arrow' />

                            </div>

                        </div>

                    </div>
                </div>
                <div className="box">
                    <div className="hover">
                        <div className="h1">
                            <p>group fitness classes</p>

                        </div>
                        <div className="h2">
                            <div className="small-circle">
                                <GoArrowUpRight className='down-arrow' />

                            </div>

                        </div>

                    </div>
                </div>
                <div className="box">
                    <div className="hover">
                        <div className="h1">
                            <p>FUNCTIONAL TRAINING</p>

                        </div>
                        <div className="h2">
                            <div className="small-circle">
                                <GoArrowUpRight className='down-arrow' />

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Sec2