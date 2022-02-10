import Link from "next/link";
import Head from 'next/head';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';


function index() {
    const [userMessage, setUserMessage] = useState('How Can I Help?')
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const messageInputRef = useRef()

    function sendEmail(e) {
        e.preventDefault();
       
        if(nameInputRef.current.value ==''){
            setUserMessage('Better add a value in the name field')
            return false;
        }
        if(emailInputRef.current.value == ''){
            setUserMessage('Better add a value in the email field')
            return false;
        }
        if(messageInputRef.current.value == ''){
            setUserMessage('Better add a value in the message field')
            return false;
        }

        const enteredName = nameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredMessage = messageInputRef.current.value

        const reqBody = {name: enteredName, email: enteredEmail, message: enteredMessage}



        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, e.target, process.env.NEXT_PUBLIC_USERID)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           setUserMessage('Thank you, message sent.');
        }, function(error) {
           console.log('FAILED...', error);
        });
      }

    return (
      <section className="showcase-form-page">
        <Head>
            <title>CFSNAP! Contact Page</title>
        </Head>
        <div className="container">
            <div className="showcase-form card">
                <h2>{userMessage}</h2>
                
                 <form onSubmit={sendEmail}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                        <input type="text" name="name" placeholder="* Name" required ref={nameInputRef} />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="* Email" required ref={emailInputRef} />
                    </div>
                    <div className="form-control">
                        <textarea name="message" required placeholder="* Enter your message here." ref={messageInputRef}>
                            
                        </textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                </form>
            </div>
        </div>
    </section>
    )
}

export default index
