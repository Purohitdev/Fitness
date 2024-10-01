import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Collapse, Button } from 'react-bootstrap';
import As from "../../Ass/new.png";
import { FiPlus } from "react-icons/fi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Sec3() {

    useGSAP(() => {

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%",
                end: "bottom 90%",
                scrub: 2,
            }
        })


        t4.from(".top-fot img , .top-fot h1 , .top-fot p ",{
            x:100,
            opacity:0,
            stagger:0.2,

        })


     

    })


    // State to manage which section is open (default to 1 for BASIC section)
    const [openSection, setOpenSection] = useState(1);

    // Function to toggle sections
    const handleToggle = (section) => {
        if (openSection === section) {
            // If the same section is clicked, close it
            setOpenSection(1); // Always reset to BASIC
        } else {
            // Otherwise, open the new section
            setOpenSection(section);
        }
    };

    return (
        <div className='sec3'>
            <div className="top-sec2">
                <div className="top-left">
                    <h1>The club</h1>
                </div>
                <div className="top-right">
                    <p>see all</p>
                    <div className="small-circle">
                        <GoArrowUpRight className='down-arrow' />
                    </div>
                </div>
            </div>
            <div className="down-sec3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, impedit. Assumenda mollitia sunt cumque consequatur neque fugit vel explicabo eos dolores. Voluptate nostrum quibusdam consequuntur vitae alias fuga laudantium aut.</p>

                <div className="main-sec3">
                    {/* Trigger */}
                    <div className="trigger">
                        <Button
                            onClick={() => handleToggle(1)}
                            aria-controls="collapse-text-1"
                            aria-expanded={openSection === 1}
                        >
                            <div className="det">
                                {openSection === 1 ? 'BASIC → ' : 'BASIC'}
                            </div>
                            <img src={As} alt="" />
                            <FiPlus />
                        </Button>

                        <Button
                            onClick={() => handleToggle(2)}
                            aria-controls="collapse-text-2"
                            aria-expanded={openSection === 2}
                        >
                            <div className="det">
                                {openSection === 2 ? 'PRIME → ' : 'PRIME'}
                            </div>
                            <img src={As} alt="" />
                            <FiPlus />
                        </Button>

                        <Button
                            onClick={() => handleToggle(3)}
                            aria-controls="collapse-text-3"
                            aria-expanded={openSection === 3}
                        >
                            <div className="det">
                                {openSection === 3 ? 'ELITE  → ' : 'ELITE'}
                            </div>
                            <img src={As} className='image' alt="" />
                            <FiPlus className='icon' />
                        </Button>
                    </div>

                    <div className="show">
                        {/* Show collapsible content based on the open section */}
                        <Collapse in={openSection === 1}>
                            <div id="collapse-text-1">
                                <div className="card basic">
                                    <h1 className="gym-name">Basic Plan</h1>
                                    <div className="price">
                                        <span className="amount">₹1999/mo</span>
                                        <p className="details">(Access to gym facilities)</p>
                                    </div>
                                    <ul className="benefits">
                                        <li>✔ Unlimited Access</li>
                                        <li>✔ Group Classes</li>
                                        <li>✔ Basic Equipment</li>
                                    </ul>
                                    <button className="cta-button">Join Basic</button>
                                </div>
                            </div>
                        </Collapse>

                        <Collapse in={openSection === 2}>
                            <div id="collapse-text-2">
                                <div className="card-col">
                                    <div className="card prime">
                                        <h1 className="gym-name">Prime Plan</h1>
                                        <div className="price">
                                            <span className="amount">₹2999/mo</span>
                                            <p className="details">(Includes all basic benefits)</p>
                                        </div>
                                        <ul className="benefits">
                                            <li>✔ Unlimited Access</li>
                                            <li>✔ Group Classes</li>
                                            <li>✔ Personal Trainer</li>
                                            <li>✔ Free Diet Plan</li>
                                        </ul>
                                        <button className="cta-button">Join Prime</button>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                        <Collapse in={openSection === 3}>
                            <div id="collapse-text-3">
                                <div className="card-col">
                                    <div className="card elite">
                                        <h1 className="gym-name">Elite Plan</h1>
                                        <div className="price">
                                            <span className="amount">₹3999/mo</span>
                                            <p className="details">(All-inclusive package)</p>
                                        </div>
                                        <ul className="benefits">
                                            <li>✔ Unlimited Access</li>
                                            <li>✔ Personal Trainer</li>
                                            <li>✔ Free Diet Plan</li>
                                            <li>✔ Sauna Access</li>
                                            <li>✔ Premium Equipment</li>
                                            <li>✔ Priority Booking</li>
                                        </ul>
                                        <button className="cta-button">Join Elite</button>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sec3;

