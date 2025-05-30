import React from 'react';
import Skills from '../components/Skills';
import AnimatedGradientText from '../components/mage-ui/text/animated-gradient-text';
import { ArrowRight, Combine } from 'lucide-react';
import Project from '../components/Project';
import CanvasCursor from '../components/mage-ui/cursor-effects/canvas-cursor-effect';
import TypingText from '../components/mage-ui/text/typing-text';
import { useNavigate } from 'react-router-dom';
import PButton from '../components/ui/PButton';
import AButton from '../components/ui/Abutton';
const Home = () => {
  const navigate = useNavigate();
  return (
    <><div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <div className="hidden md:block">
        <CanvasCursor />
      </div>
    </div>
      <section className="h-screen w-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('public/images/hero.png')] opacity-10 z-0 bg-center bg-cover"></div>

        <div className="text-center z-10 max-w-3xl px-4">
          <p className="text-xl sm:text-xl font-bold uppercase tracking-widest text-gray-300 mb-4">
            Full-Stack Engineer | Algorithm Specialist
          </p>

          <h1 className="text-3xl sm:text-6xl font-extrabold ">
            <span className="bg-blue-gradient bg-clip-text text-transparent ">
              HELLO THERE!{' '}
            </span>
            <span className="italic font-semibold text-gray-100">
              I'M
              <AnimatedGradientText className="text-6xl">
                Sudhanshu
              </AnimatedGradientText>
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-md sm:text-lg">
            I craft seamless, scalable web applications while solving complex algorithmic challenges with precision—delivering efficient, user-focused solutions that truly work.
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <PButton/>
            <AButton/>
            
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">

        </div>
      </section>
      <div>
        <Skills />
      </div>
      <div className='flex flex-col  text-center gap-4  mt-10'>
        <Project className='mb-7' />
        <div className="min-w-full max-w-96 rounded-sm  bg-gray-800 px-4 py-2 text-yellow-400 shadow-lg">
          <TypingText
            text=" > © 2025 All Copyright Reserved  |  Sudhanshu Tiwari"
          />
        </div>
      </div>

    </>
  );
};

export default Home;