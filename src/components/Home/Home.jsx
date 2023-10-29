import React, { useEffect } from 'react'
import './Home.css'
import Typed from 'typed.js';
import img from '/home-img.png'
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    const options = {
      strings: ['front end developer', 'JavaScript developer', 'full stack developer', 'UX designer'],
      typeSpeed: 55,
      backSpeed: 75,
      loop: true,
    }
    const typed = new Typed('.input', options);


    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };

  }, [])

  return (
    <>
      <section id='home'>
        <div className="intro">
          <div className="intro-contatnt">
            <p>Hi, I am </p> 
            <h1> Prashant Kumar</h1>
            <h2><span className="input"> front end developer</span></h2>
            <NavLink className='btn-gurup' to="/Contact" >
              <button>Hire me</button>
            </NavLink>
          </div>

          <img src={img} alt="" className='bg' />

        </div>
      </section>

    </>
  )
}

export default Home