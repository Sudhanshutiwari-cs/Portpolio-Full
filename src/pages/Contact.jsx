import React from 'react'
import CanvasCursor from '../components/mage-ui/cursor-effects/canvas-cursor-effect'
import { Links } from '../components/mage-ui/links/links'
import TypingText from '../components/mage-ui/text/typing-text'
import EButton from '../components/ui/EButton'
import Button from '../components/ui/Button'

const Contact = () => {
  return (
    <>

      <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <CanvasCursor />
      </div>
<div className="absolute inset-0 bg-[url('public/images/hero.png')] opacity-10 z-0 bg-center bg-cover"></div>

      <div className="w-full h-[90vh] absolute top-20 flex flex-col justify-between items-center  pt-6 pspace-y-6">
        
  
        <div className="w-full max-w-4xl flex justify-center">
          <Links />
        </div>

   
        <div className="w-full max-w-3xl flex justify-evenly items-center bg-green-300 rounded-xl py-4 mt-2 shadow-md">
          <EButton />
          <Button />
        </div>

   
        <div className="min-w-full max-w-96 rounded-sm text-center z-10 bg-gray-800 px-4 py-2 text-yellow-400 shadow-lg mt-10">
          <TypingText text="> © 2025 All Copyright Reserved  |  Sudhanshu Tiwari" />
        </div>
      </div>
    </>
  )
}

export default Contact
