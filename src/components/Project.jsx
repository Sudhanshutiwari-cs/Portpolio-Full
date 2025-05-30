import React from 'react'
import AnimatedGradientText from './mage-ui/text/animated-gradient-text'
import Pro1 from './ui/Pro1'
import Pro2 from './ui/Pro2'
import Pro3 from './ui/Pro3'
import { SparklesTextDemo2 } from './mage-ui/text/sparkles-text'

const Project = () => {
  return (
    <>
     <div className="flex justify-center my-5 lg:py-8">
            <div className="">
              <span className=""></span>
              <span className=""><SparklesTextDemo2/></span>
              <span className="w-24 h-[2px] bg-[#2a2a2a]"></span>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 items-center justify-items-center'>
            <Pro1 className/>
            <Pro2/>
            <Pro3/>
          </div>
    
    </>
  )
}

export default Project