import React, {useRef} from 'react';
import NavBar from '../Components/NavBar/index.js'
import { Form, Card, Button } from 'react-bootstrap';

export default function SignUp() {


    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef() 
    return (
        <div>
        <NavBar />
            <Card className="form-card">
                <Card.Body>
                    <h2 className="text-center mb-4">SignUp</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>E-Mail</Form.Label>
                                <Form.Control className="text-field" id="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                                <Form.Control className="text-field" id="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="passwordConfirm">
                            <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control className="text-field" id="passwordConfirm" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="button">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}


 