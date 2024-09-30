import React from 'react'
import As from "../../Ass/star.avif"

function Sec1() {
    return (
        <div className='sec1'>
            <div className="sec1-mid">
                <img src={As} alt="" />
                <h1>FITNESS SHOULD BE <br /> ACCESSIBLE TO EVERYONE</h1>
                <p> Whether you're a seasoned athlete or just starting out, we have a
                    variety of equipment and classes to suit your needs. Our cardio
                    machines, weight lifting equipment, and functional training areas
                    provide a comprehensive workout experience.</p>
                    <button className='button'>Join today</button>

            </div>

        </div>
    )
}

export default Sec1