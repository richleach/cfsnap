import emailjs from 'emailjs-com';

export default function sendEmail(req, res) {
    const body = JSON.parse(req.body)
    if(req.method === 'POST'){
        const name = body.name
        const email =  body.email
        const message = body.message

        const newMessage = {
            name: name,
            email: email,
            message: message
        }

        emailjs.sendForm('service_hnoicrl', 'template_8mbc16m', newMessage, 'user_ACr7oR5XhBgOBbZnuf31n')
        .then((result) => {
            console.log(result.text);
            //setUserMessage('Thank you, message sent.');
        }, (error) => {
            console.log(error.text);
        });

        //return a status, message to the browser
        res.status(201).json({message: 'Success!'})
    } else {
        const responseMessage = 'Thanks for your feedback'
        res.status(200).json({feedback: ''})
    }
}

