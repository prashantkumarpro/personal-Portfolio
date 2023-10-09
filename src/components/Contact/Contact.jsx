import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
<>
{/* <!-- contact page start from here  --> */}
    <form id="contact" className="form-container">
        <div className="my-img">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""/>
        </div>
        <div className="form-box">
            <h2>Contact me</h2>
            <label htmlFor="name"><input type="text" id="name" placeholder="your name"/></label>
            <label htmlFor="name"><input type="email" placeholder=" your email" required/></label>
            <label htmlFor="name"><input type="phone" placeholder=" your phone" required/></label>
            <div className="btn-gurup">
                <button type="submit" className="btn">Send Message</button>
            </div>
        </div>

    </form>
</>
  )
}

export default Contact