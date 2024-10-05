import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Abt2() {

    useGSAP(() => {

        const tb3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".abt2",
                start: "top 50% ",
                end: "bottom 90%%",
                scrub: 2,
            }
        })


        tb3.from(".abt2-top", {
            y: 20,
            opacity: 0,
            stagger: 0.2,

        })

        tb3.from(".abt-box", {
            x: 20,
            opacity: 0,
            stagger: 0.2,

        })



    })


    return (
        <div className="abt2">

            <div className="abt2-top">
                <h1>OUR VALUES</h1>
                <p>We live and breathe our six core values and six <span>brand promises</span> — they serve as the backbone of our operations and speak of our commitment to improving the lives of our customers, supporting our team, championing industry standards, and driving our business with integrity and passion.</p>
            </div>
            <div className="abt2-mid">

                <div className="t1">
                    <div className="abt-box">
                        <img src="https://images.squarespace-cdn.com/content/v1/5e1b9a2761e8891899523fa1/c822926e-0dc4-4b35-a6d4-411b4a93929d/Why+Weekly+11+Meetings+are+Non-Negotiable+(1).png" alt="" />
                        <h1>People Centric</h1>
                        <p>Prioritising the happiness and wellbeing of our team members, customers, and stakeholders before all else.</p>
                    </div>
                    <div className="abt-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo3Dx2WiBBtUCKgmVP6cvJd1O1SJo4pcmNw&s" alt="" />
                        <h1>'Nimbagility'</h1>
                        <p>Combining nimble actions with agile thinking to approach challenges, fostering resilience through creative and efficient problem-solving.</p>
                    </div>
                    <div className="abt-box">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYR11mkxzZ8mKmDj3JqCabJ5ClggU4Zf-p5gXyX1XAH3ljreoS" alt="" />
                        <h1> Improvement</h1>
                        <p>Constantly seeking new ways to grow, learn, and innovate — embracing and leading change as a catalyst for progress.</p>
                    </div>
                </div>
                <div className="t1">
                    <div className="abt-box">
                        <img src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-office-building-icon-png-image_987372.jpg" alt="" />
                        <h1>Collaboration</h1>
                        <p>Working together with effective communication, mutual respect and individual ownership to achieve shared goals and collective accountability.</p>
                    </div>
                    <div className="abt-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsMMQzsCA4CHPS9yZJVCrbpIUAUzhyOYZrKER3GaWsm6QRY5i" alt="" />
                        <h1>Empathy</h1>
                        <p>Demonstrating kindness, compassion and understanding towards others to cultivate deeper relationships and create a positive impact.</p>
                    </div>
                    <div className="abt-box">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6V9RG7qjlVx2uwQ-ABw02DGGgCtRyPeVC4KlvFSCodF0qIUMu" alt="" />
                        <h1>Inclusivity</h1>
                        <p>Cultivating a culture that welcomes differences, celebrates unique perspectives, and provides a respectful and nurturing environment.</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Abt2