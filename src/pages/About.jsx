import React from 'react';
import CanvasCursor from '../components/mage-ui/cursor-effects/canvas-cursor-effect';
import TypingText from '../components/mage-ui/text/typing-text';
import { SparklesTextDemo } from '../components/mage-ui/text/sparkles-text';
import { GraduationCap, Calendar } from "lucide-react"


const About = () => {
  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <CanvasCursor />
      </div>
      <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-10 z-0 bg-center bg-cover"></div>

      <div className="min-h-screen flex flex-col items-center justify-center relative mt-14 z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <SparklesTextDemo />


          </section>

          {/* Content Sections */}
          <div className="space-y-16 w-full">
            {/* Our Story */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-5xl mb-6 font-bold pp text-orange-500" >Sudhanshu Tiwari</h2>
                <div className="space-y-4 text-white pp ">
                  <p>I
                    As a fresh face in the tech industry, my journey at the Kanpur Institute of Technology has been transformative, instilling in me a strong foundation in Computer Science and a passion for technology that I actively apply as a Campus Ambassador and Contributor at GirlScript. With a focus on collaboration and innovation, my contributions center around leveraging my skills in Postman API and the MERN stack to drive community growth and learning.

                  </p>
                  <p>
                    My commitment to professional development is evidenced by multiple certifications in Python, SQL, and Postman API Fundamentals, reflecting a dedication to continuous learning and mastery of cutting-edge tools. At GirlScript, our teamwork emphasizes empowering students with technology, aligning with my ambition to make a tangible impact in the tech world while nurturing my own expertise in software development.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-gray-100 rounded-full h-40 w-40 md:h-64 md:w-64 flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src="/images/aboutl.jpg"
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Our Mission */}
            <section className=" rounded-2xl p-8 md:p-12 w-full text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Education</h2>

              <div className="space-y-6 max-w-3xl mx-auto">
                {/* First Education */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-gray-300" />
                    <h3 className="text-xl font-semibold text-white">Bachelor of Technology</h3>
                  </div>
                  <p className="text-lg text-gray-300 font-medium mb-2">Kanpur Institute of Technology</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - 2028 • Kanpur, Uttar Pradesh</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Focused on software engineering, data structures, algorithms, and web development
                  </p>
                </div>

                {/* Second Education */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-gray-300" />
                    <h3 className="text-xl font-semibold text-white">Intermediate</h3>
                  </div>
                  <p className="text-lg text-gray-300 font-medium mb-2">K.R Education Centre</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - 2024 • Regular</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Complete Schooling with a focus on Mathematics and Science, achieving 80%+ in the board exams
                  </p>
                </div>
              </div>
            </section>

            {/* Our Values */}
            <section className="w-full">
              <h2 className="text-3xl font-bold text-white pp mb-8 text-center">Problem Solving Report</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {[
                  {
                    title: "Leetcode",
                    description: "317 problems solved",
                    icon: <img src='https://leetcode.com/favicon.ico' width='35' height='35' alt='Leetcode icon' />
                  },
                  {
                    title: "GeeksforGeeks",
                    description: "176 problems solved",
                    icon: <img src='images/gfg.png' width='35' height='35' alt='Leetcode icon' />
                  },
                  {
                    title: "CodeChef",
                    description: "1143 Rating",
                    icon: <img src='images/cc.png' width='35' height='35' alt='Leetcode icon' />
                  },
                  {
                    title: "Coding Ninjas",
                    description: "102 problems solved",
                    icon: <img src='images/coding.png' width='35' height='35' alt='Leetcode icon' />
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white p-6 pp rounded-xl shadow-sm hover:shadow-md transition-shadow max-w-xs w-full">
                    <div className="text-4xl mb-4 text-center items-center flex justify-center">{value.icon}</div>
                    <h3 className="text-3xl font-semibold mb-2 text-center">{value.title}</h3>
                    <p className="pp text-center text-bold text-2xl">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Section */}

          </div>

          {/* CTA Section */}

        </div>
      </div>
      <div className="min-w-full max-w-96 rounded-sm text-center z-10 bg-gray-800 px-4 py-2 text-yellow-400 shadow-lg mt-10">
        <TypingText text="> © 2025 All Copyright Reserved  |  Sudhanshu Tiwari" />
      </div>
    </>
  )
}

export default About;