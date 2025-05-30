import Marquee from "react-fast-marquee"
import AnimatedGradientText from "./mage-ui/text/animated-gradient-text"
import { SparklesTextDemo1 } from "./mage-ui/text/sparkles-text"

// Skills data array
const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Firebase",
  "Python",
]

// Function to get skill image path
const skillsImage = (skill) => {
  const skillID = skill.toLowerCase()

  // Map of skill names to their image paths
  const images = {
    html: "/images/html.svg",
    css: "/images/css.svg",
    javascript: "/images/js.svg",
    react: "/images/react.svg",
    "next.js": "/images/nextjs.svg",
    "node.js": "/images/node.svg",
    tailwind: "/images/tailwind.svg",
    mongodb: "/images/mongo.svg",
    redux: "/images/redux.svg",
    firebase: "/images/fb.svg",
    express: "/images/express.svg",
    vercel: "/images/vercel.svg",
    python: "/images/python.svg",
    // Add more skills as needed
  }

  return {
    src: images[skillID] || "/images/skills/default.png",
  }
}

function Skills() {
  return (
    <div id="skills" className="relative z-10  my-12 lg:my-24 border-[#2a2a2a] ">
      <div className="w-[100px] h-[100px] bg-cyan-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="">
          <span className=""></span>
          <span className=""><SparklesTextDemo1 /></span>
          <span className="w-24 h-[2px] bg-[#2a2a2a]"></span>
        </div>
      </div>

      <div className="w-full my-12 overflow-hidden">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          style={{ width: "100%" }}
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#333333] bg-[#1e1e1e] shadow-none shadow-gray-50 group-hover:border-cyan-400 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill).src || "/placeholder.svg"}
                      alt={skill}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Skills
