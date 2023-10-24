import React, { useEffect } from 'react'
import './Home.css'
import Typed from 'typed.js';
import img from '/src/home-img.png'
import { Link } from 'react-router-dom';

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
      <div id='home'>
        <div className="home-page">
          <div className="left">
            <p>Hi, I am </p>
            <h1> Prashant Kumar</h1>
            <h2> a <span className="input"> front end developer</span></h2>
            <Link className='btn-gurup' to={'/Contatc'}>
              <button>Hire me</button>
            </Link>


          </div>

          <img src={img} alt="" className='bg' />

        </div>
      </div>

    </>
  )
}

export default Home