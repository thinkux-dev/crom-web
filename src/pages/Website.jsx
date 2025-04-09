import React from 'react'
import Hero from '../components/Hero/Hero'
import Business from '../components/Business/Business'
import Service from '../components/Service/Service'
import Recent from '../components/Recent/Recent'
import Portfolio from '../components/Portfolio/Portfolio'

const Website = () => {
  return (
    <div>
        {/* <FeedbackButton/> */}
        <Hero/>
        <Business/>
        <Service/>
        <Recent/>
        <Portfolio/>
    </div>
  )
}

export default Website
