import React from 'react'
import './About.css'
import gsap from 'gsap'
const About = () => {
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
            <div className="cursor"></div>
            <section id="about">
                <div className="about_me" onMouseMove={onMmove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <div className="box" id='bg'>
                        <img src="https://images.unsplash.com/photo-1543269664-647163ef2ee4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470"
                            alt="" />
                    </div>
                    <div className="box" id='intro'>
                        <h2>visit my portfolio & hire me</h2>
                        <h1>About me</h1>
                        <p>I have a strong foundation in HTML, CSS, and JavaScript, and I'm constantly learning and
                            exploring
                            new
                            technologies and frameworks. I believe in the power of frontend development to transform ideas
                            into
                            engaging
                            interfaces that leave a lasting impact.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus illum doloremque, enim ea odit, sunt incidunt porro earum praesentium eaque maiores molestiae, cumque libero.</p>
                        <br />
                        <div className="cv-btn">
                            <a href="#contact">Download My CV</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About