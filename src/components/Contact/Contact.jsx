import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'


const Contact = () => {
    const form = useRef();
    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let messageRef = useRef(null);
    let subjectRef = useRef(null)

    const nameHendlar = () => {
        let userName = nameRef.current.value.toUpperCase();
        nameRef.current.value = userName;
    }

    const emailHendlar = ()=>{
        let userEmail = emailRef.current.value;
        let emailPattern = '@.'
        console.log(userEmail.includes(emailPattern))
    }
    const messageHandler = () => {
        const userMessage = messageRef.current.value;
        const firstChar = userMessage.charAt(0).toUpperCase();
        const restOfMessage = userMessage.slice(1);
        messageRef.current.value = firstChar + restOfMessage;
    }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04h9oyt', 'template_hgw3cdm', form.current, 'PJBv1B-lysjDL9jhd')
            .then((result) => {
                if (nameRef.current.value === '') {
                    alert('Please fill your name')
                    return false;
                }
                if (emailRef.current.value === '') {
                    alert('Please fill your email')
                    return false;
                }
                if (messageRef.current.value === '') {
                    alert('Please Write Your Message');
                    return false;
                }

                alert("sent message successfuly");
                console.log(result)
                // e.target.reset(); // Clear the form fields

                // Clear the input fields using the useRef references
                nameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
                subjectRef.current.value = '';
            }, (error) => {
                alert("sending message fialled");
                console.log(error)
                nameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
                subjectRef.current.value = '';
            });

    };



    return (
        <>
            <form id="contact" className="form-container" ref={form} onSubmit={sendEmail}>
                
                <div className="my-img">
                    <img src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374"
                        alt="" />
                </div>
                <div className="form-box">
                <h2>Contact me here</h2>
                    <label htmlFor="name">Name
                        <input type="text" name="name" id="name" placeholder="Enter name..." ref={nameRef} onChange={nameHendlar} />
                    </label>

                    <label id="email-label">Email
                        <input type="email" placeholder="Enter email..." ref={emailRef} name="email" onChange={emailHendlar} />
                    </label>
                    <label id="subject">Subject
                        <input type="text" placeholder="Enter email..." ref={subjectRef} name="email" onChange={emailHendlar} />
                    </label>

                    <label htmlFor="message">Message
                        <textarea name="message"
                            placeholder='Type message here'
                            rows="3"
                            cols="30"
                            ref={messageRef}
                            onChange={messageHandler}
                        ></textarea>
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






