import React from 'react'
import Navb from '../Navb'
import HeroTop from './HeroTop'
import Hero from './Hero'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Foot from '../Foot'

function Home() {
  return (
    <div className='home'>
        {/* <Navb/> */}
        <HeroTop/>
        <Hero/>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        {/* <Foot/> */}
    </div>
  )
}

export default Home