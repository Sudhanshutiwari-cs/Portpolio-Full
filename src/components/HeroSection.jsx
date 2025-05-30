import React from 'react';

const HeroSection = () => (
 <section className="h-screen w-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('public/images/hero.png')] opacity-10 z-0 bg-center bg-cover"></div>

      <div className="text-center z-10 max-w-3xl px-4">
        <p className="text-xl sm:text-xl font-bold uppercase tracking-widest text-gray-300 mb-4">
          Full-Stack Engineer | Algorithm Specialist
        </p>

        <h1 className="text-3xl sm:text-6xl font-extrabold ">
          <span className="bg-blue-gradient bg-clip-text text-transparent">
            HELLO THERE!{' '}
          </span>
          <span className="italic font-semibold text-gray-100">
            I'M Sudhanshu
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-md sm:text-lg">
          I craft seamless, scalable web applications while solving complex algorithmic challenges with precision—delivering efficient, user-focused solutions that truly work.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <button className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            Projects
          </button>
          <button className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            About Me
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <InfoCard />
      </div>
    </section>
);

export default HeroSection;
