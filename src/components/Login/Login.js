import React, { useRef, useState } from 'react';
import {Button, Col, Container, Form, Image, Row} from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      const navigate = useNavigate();
      const emailRef = useRef('');
      const passwordRef = useRef('');
      const [message, setMessage] = useState('');

      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
    //   if(loading ){
    //       return <Loading></Loading>
    //   }
      if(user){
        navigate(from, { replace: true });;
      }
      
    const handleSignIn =async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handlePasswordReset = async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast("Password reset email sent!")
        }
        else{
            setMessage("Enter your email!");
        }
    }
    return (
        <div>
             <Container fluid>
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
                                        required
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        ref={passwordRef}
                                        placeholder="Password"
                                        required
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>
                                </Form.Floating>
                                {error && <p className='text-start text-danger'>{error.message}</p> }
                                {message && <p className='text-start text-danger'>{message}</p> }
                                
                                <Button className='login-btn mt-3' type="submit">
                                    Login
                                </Button>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button onClick={handlePasswordReset} className='link-style' variant="link">Forgot Password</Button>
                                </div>
                            </Form>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={7} lg={7}>
                        <Image src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1650196997~exp=1650197597~hmac=178220bfbffdc22f466d193620b9c5e061140006c40c9d2efeea9656063e7d59&w=740" alt="" width="80%" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;