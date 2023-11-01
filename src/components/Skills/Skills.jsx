import React from 'react'
import './Skills.css'
import gsap from 'gsap'

const Skills = () => {
    const onMmove = (e) => {
        console.log(`${e.pageX}px`)
        gsap.to('.cursor', {
            x: `${e.pageX}px`,
            y: `${e.pageY}px`,
            transform: `translate(-50%, -50%)`
        })
    }
    const onEnter = () => {
        gsap.to('.cursor', {
            scale: 1
        })
    }
    const onLeave = () => {
        gsap.to('.cursor', {
            scale: 0
        })
    }
    

  return (
   <>
    {/* <!-- skill section start from here  --> */}
    <div className="cursor"></div>
        <section id="Skills"
          onMouseMove={onMmove}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}>

            <div className="skill-header">
                <h2>My <span>Skills</span> </h2>
                <p>Here is my skills to represent my Expertise</p>
            </div>
            <div className="skill-page">
                <div className="skill-bar">
                    <div className="info">
                        <p>HTML</p>
                        <p className="percent">90%</p>
                    </div>
                    <div className="bar">
                        <span className="html"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>CSS</p>
                        <p className="percent">60%</p>
                    </div>
                    <div className="bar">
                        <span className="css"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>JavaScript</p>
                        <p className="percent">70%</p>
                    </div>
                    <div className="bar">
                        <span className="JavaScript"></span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="info">
                        <p>PHP</p>
                        <p className="percent">80%</p>
                    </div>
                    <div className="bar">
                        <span className="php"></span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="info">
                        <p>React</p>
                        <p className="percent">40%</p>
                    </div>
                    <div className="bar">
                        <span className="react"></span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="info">
                        <p>Bootstrap</p>
                        <p className="percent">85%</p>
                    </div>
                    <div className="bar">
                        <span className="bootstrap"></span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="info">
                        <p>Mondodb</p>
                        <p className="percent">75%</p>
                    </div>
                    <div className="bar">
                        <span className="mongodb"></span>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="info">
                        <p>Node</p>
                        <p className="percent">60%</p>
                    </div>
                    <div className="bar">
                        <span className="node"></span>
                    </div>
                </div>

            </div>

        </section>
   </>
  )
}

export default Skills