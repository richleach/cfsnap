import Link from "next/link";
import Head from 'next/head';
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

        fetch('/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        setUserMessage('Thank you, message sent.');

        /* emailjs.sendForm('service_hnoicrl', 'template_8mbc16m', e.target, 'user_ACr7oR5XhBgOBbZnuf31n')
          .then((result) => {
              console.log(result.text);
              setUserMessage('Thank you, message sent.');
          }, (error) => {
              console.log(error.text);
          }); */
      }

    return (
      <section className="showcase-form-page">
        <Head>
            <title>CFSNAP Contact Page</title>
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