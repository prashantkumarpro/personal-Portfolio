import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { useFetcher } from 'react-router-dom';
const Contact = () => {
    const form = useRef();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k8atwjt', 'template_lrtqd5r', form.current, 'PJBv1B-lysjDL9jhd')
            .then((result) => {
                alert(`${result}succes`)
                // e.target.reset(); // Clear the form fields

                // Clear the input fields using the useRef references
                nameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
            }, (error) => {

                alert(`${error}succes`)
            });

    };



    return (
        <>
            {/* <!-- contact page start from here  --> */}
            <form id="contact" className="form-container" ref={form} onSubmit={sendEmail}>
                <div className="my-img">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="" />
                </div>
                <div className="form-box">
                    <h2>Contact me</h2>
                    <label htmlFor="name"><input type="text"
                        name="name" id="name" placeholder='your name' ref={nameRef}
                    /></label>
                    <label htmlFor="email"><input type="email" placeholder='your email' ref={emailRef} name="email" /></label>
                    <label htmlFor="message">
                        <textarea name="message" placeholder='type message here' ref={messageRef}></textarea>
                    </label>
                    <div className="btn-gurup">
                        <button type="submit" className="btn">Send</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default Contact