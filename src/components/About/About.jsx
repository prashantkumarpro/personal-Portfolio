import React from 'react'
import './About.css'
const About = () => {
  return (
    <>

<section id="about">
            <div className="about_me">
                <div className="left">
                    <h2>Learn more about me</h2>
                    <p>I have a strong foundation in HTML, CSS, and JavaScript, and I'm constantly learning and
                        exploring
                        new
                        technologies and frameworks. I believe in the power of frontend development to transform ideas
                        into
                        engaging
                        interfaces that leave a lasting impact.</p>
                </div>
                <div className="right">
                    <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt=""/>
                </div>
            </div>
        </section>
    </>
  )
}

export default About