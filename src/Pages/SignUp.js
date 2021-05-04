import React, {useRef, useState} from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext.js'; 

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef() 
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
     

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try { 
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log(signup)
        } catch {
            setError('Failed to create an account')
            console.log(signup)
            console.log(setError)
        }
        setLoading(false)

    }    


    return (
        <div>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
            <Card className="form-card">
                <Card.Body>
                    <h2 className="text-center mb-4">SignUp</h2>
                    {currentUser && currentUser.email}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>E-Mail</Form.Label>
                                <Form.Control className="text-field" type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                                <Form.Control className="text-field" type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="passwordConfirm">
                            <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control className="text-field" type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="button" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        </div>
    )
}


 