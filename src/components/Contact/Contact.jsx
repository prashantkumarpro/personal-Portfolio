import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04h9oyt', 'template_hgw3cdm', form.current, 'PJBv1B-lysjDL9jhd')
            .then((result) => {
                alert("sent message successfuly");
                console.log(result)
                // e.target.reset(); // Clear the form fields

                // Clear the input fields using the useRef references
                nameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
            }, (error) => {
                alert("sending message fialled");
                console.log(error)
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
                    <label htmlFor="name">Name<sup>*</sup>
                        <input type="text" name="name" id="name" placeholder="enter name..." ref={nameRef} required />
                    </label>


                    <label id="email-label">Email<sup>*</sup>
                        <input type="email" placeholder="enter email..." ref={emailRef} name="email" required />
                    </label>

                    <label htmlFor="message">message<sup >*</sup>
                        <textarea name="message" placeholder='type message here' rows="3" cols="30" ref={messageRef}required></textarea>
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







