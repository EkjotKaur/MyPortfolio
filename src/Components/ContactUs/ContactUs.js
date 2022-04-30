import "./Contact.css";
import { Container, Form } from "react-bootstrap";
import { Button } from "ui-neumorphism";
import { useState } from "react";
import Heading from "../Heading/Heading";
import Quote from '../../assets/images/contact/left-quote.png'

const ContactUs = () => {
    const [error, setError] = useState();
    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    const [values, setValues] = useState(initialState);

    const submitForm = async (e) => {
        e.preventDefault();
        setError();
        if (!values.name || !values.email || !values.subject || !values.message)
            setError("All fields are necessary");

        // Example POST method implementation:

        // Default options are marked with *
        const response = await fetch("https://ekjotkaur.herokuapp.com/contact", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(values), // body data type must match "Content-Type" header
        });
        try {
            const data = await response.json(); // parses JSON response into native JavaScript objects
            console.log(data);
            setValues(initialState);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ContactUs mt-5" id="contact">
            <Container>
                <Heading name="Contact Us" />
                <div className="form-div row">
                    <Form className="row contactForm col-7">
                        <Form.Group className="mb-3 col-md-6 col-12">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                size="lg"
                                type="text"
                                value={values.name}
                                placeholder="Enter name"
                                onChange={(e) =>
                                    setValues((prev) => {
                                        return { ...prev, name: e.target.value };
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                size="lg"
                                type="email"
                                value={values.email}
                                placeholder="Enter email"
                                onChange={(e) =>
                                    setValues((prev) => {
                                        return { ...prev, email: e.target.value };
                                    })
                                }
                            />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                size="lg"
                                type="text"
                                value={values.subject}
                                placeholder="Enter Subject"
                                onChange={(e) =>
                                    setValues((prev) => {
                                        return { ...prev, subject: e.target.value };
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                size="lg"
                                as="textarea"
                                rows={3}
                                value={values.message}
                                placeholder="Message"
                                onChange={(e) =>
                                    setValues((prev) => {
                                        return { ...prev, message: e.target.value };
                                    })
                                }
                            />
                            {error && <Form.Text className="text-muted">{error}</Form.Text>}
                        </Form.Group>

                        <Button className="contactBtn" onClick={(e) => submitForm(e)}>
                            Submit
                        </Button>
                    </Form>
                    <div className="col-5 ps-4 recommend">
                        <div className="name-r">Abhishek Kumar Mishra</div>
                        <div className="des-r">
                            Senior Software Engineer at Microsoft India, Mentor (AMA over
                            chat)
                        </div>
                        <img src={Quote} alt="quote" />
                        <div className="py-2">
                            It was a great experience mentoring Ekjot during an event
                            organized by Microsoft recently.
                        </div>
                        <div className="py-2">
                            She's one of the best students I've mentored so far. Immensely
                            focused, very clear about the objectives and eager to do more than
                            expected to deliver a great end-to-end solution. She is a fast
                            learner and was very proactive in all communications and also open
                            for suggestions and feedback. She also shared information with the
                            other members in the group, even though the tasks were not part of
                            a team event, which shows she is a great team player as well apart
                            from being a awesome engineer.
                        </div>
                        <div className="py-2">All the best and I am sure you'd do great wherever you choose to work.</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
