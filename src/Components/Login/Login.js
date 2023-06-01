import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

import { Link,useNavigate } from "react-router-dom";
import app from "../../Firebase";
import "./Login.css";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [validate, setValidate] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
      console.log(email, password);
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        toast("You are login success")
      } catch (error) {
        console.log(error);
      }
    } else setValidate(true);
    navigate("/")
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center p-5">
          <Col md={4} className=" text-bg-warning">
            <Form onSubmit={onFormSubmit} noValidate validated={validate}>
              <h1>Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Control.Feedback type="valid">
                  Correct E-mail
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Your email is not correct
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Form.Control.Feedback type="valid">
                  Correct Password
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Your Password is not correct
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
