import './Contact.css';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'ui-neumorphism';
import { useState } from 'react';
import Heading from '../Heading/Heading';

const ContactUs = () => {
    const [error, setError] = useState();
    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const [values, setValues] = useState(initialState);

    const submitForm = async (e) => {
        e.preventDefault();
        setError();
        if (!values.name || !values.email || !values.subject || !values.message)
            setError("All fields are necessary");

        // Example POST method implementation:

        // Default options are marked with *
        const response = await fetch("http://localhost:5000/contact", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(values) // body data type must match "Content-Type" header
        });
        try {
            const data = await response.json(); // parses JSON response into native JavaScript objects
            console.log(data);
            setValues(initialState);
        } catch (err) {
            console.log(err);
        }



    }

    return (
        <div className="ContactUs mt-5">
            <Container>
                <Heading name="Contact Us" />
                <div  className="form-div">
                <Form className='row contactForm'>
                    <Form.Group className="mb-3 col-md-6" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter name"
                            onChange={(e) => setValues(prev => {
                                return { ...prev, name: e.target.value }
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email"
                            onChange={(e) => setValues(prev => {
                                return { ...prev, email: e.target.value }
                            })} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Subject"
                            onChange={(e) => setValues(prev => {
                                return { ...prev, subject: e.target.value }
                            })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control size="lg" as="textarea" rows={3} placeholder="Message"
                            onChange={(e) => setValues(prev => {
                                return { ...prev, message: e.target.value }
                            })} />
                        {error && <Form.Text className="text-muted">
                            {error}
                        </Form.Text>}
                    </Form.Group>

                    <Button className="contactBtn" onClick={(e) => submitForm(e)}>
                        Submit
                    </Button>
                </Form>
                </div>
            </Container>
        </div>
    );
}

export default ContactUs;
