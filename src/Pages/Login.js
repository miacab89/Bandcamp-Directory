import React from 'react';
import {Container, Card, Form, Button } from 'react-bootstrap';


export function Login() {
        return (
            <div>
                <div>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
            <Card className="form-card">
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>E-Mail</Form.Label>
                                <Form.Control className="text-field" type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                                <Form.Control className="text-field" type="password" required />
                        </Form.Group>
                        <Button className="button" type="submit">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Container>
            </div>
            </div>
        )
    }


export default Login;
