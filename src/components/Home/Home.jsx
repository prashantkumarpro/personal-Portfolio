import React from 'react'
import './Home.css'


const Home = () => {
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
            <h2> <span className="input">front end developer</span></h2>
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