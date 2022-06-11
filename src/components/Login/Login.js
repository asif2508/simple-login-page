import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './Login.css';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [message] = useState('');

    const handleSignIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const data = {
            email: email,
            password: password
        }
        fetch('https://mighty-fortress-51207.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toast(JSON.stringify(data));
            });
        event.target.reset();
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={5} lg={5}>
                        <div className="login-style">
                            <h3 className='text-center'>WELCOME BACK</h3>
                            <p className='text-center mt-0 pt-0'><small>Login to Your Account</small></p>
                            <Form onSubmit={handleSignIn} className='w-75 mx-auto form-style'>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        ref={emailRef}
                                        id="floatingInputCustom"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        ref={passwordRef}
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>
                                </Form.Floating>
                                {message && <p className='text-start text-danger'>{message}</p>}

                                <Button className='login-btn mt-3' type="submit">
                                    Login
                                </Button>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Button className='link-style' variant="link">Forgot Password</Button>
                                    </Form.Group>
                                    
                                </div>
                            </Form>
                        </div>

                    </Col>
                    <Col xs={12} md={7} lg={7} className='img-style'>
                        <Image src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?t=st=1654970589~exp=1654971189~hmac=0c92b6cfdf238987b74c9d9f3879d556fed49b03ab404706886fa463bdacd36b&w=740" alt="" width="90%" />
                    </Col>
                </Row>
            </Container>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;