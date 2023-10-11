import React, { useEffect } from 'react'
import './Home.css'
import Typed from 'typed.js';



const Home = () => {

  useEffect(() => {
    // Initialize Typed.js within the useEffect to ensure it runs after the component is mounted.
    const options = {
      strings: ["front end developer", "Web Developer", "UX Designer", "full stack developer"],
      typeSpeed: 70,
      backSpeed: 55,
      loop: true
    };

    const typed = new Typed(".input", options);

    // Clean up the Typed instance when the component unmounts.
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id='home'>
        <div className="home-page">
          <div id="img-me" className="right">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="my-img" />
          </div>
          <div className="left">
            <p>Hi, I am </p>
            <h1> Prashant Kumar</h1>
            <h2> a <span className="input"> front end developer</span></h2>
            <div className="btn-gurup">
              <button>Hire me</button>
              <button>Download CV</button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Home