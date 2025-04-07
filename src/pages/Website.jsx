import React from 'react'
import Hero from '../components/Hero/Hero'
import Business from '../components/Business/Business'
import Service from '../components/Service/Service'
import Recent from '../components/Recent/Recent'

const Website = () => {
  return (
    <div>
        {/* <FeedbackButton/> */}
        <Hero/>
        <Business/>
        <Service/>
        <Recent/>
    </div>
  )
}

export default Website
