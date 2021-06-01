import React, { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import inlieu from '../inlieu.png'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button variant="dark" disabled={loading} className="button" type="submit">
              Log In
            </Button>
            <div>Need an account? <Link to="/signup">Sign Up</Link></div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="logo"><img src={inlieu} alt="inlieu" /></div>
      </Card>
    </Container>
  )
}

