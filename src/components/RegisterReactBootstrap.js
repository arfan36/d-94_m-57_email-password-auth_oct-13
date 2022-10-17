import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

function RegisterReactBootstrap() {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please at least one special characters');
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifyEmail();
            }).catch((error) => {
                console.error('error: ', error);
                setPasswordError(error.message);
            });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Please check your email and verify your email address');
        }).catch((error) => {
            console.error(error);
        });
    };

    const handleForgetPassword = () => {
        // sendPasswordResetEmail(auth, email);
    };

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register !!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small>Already have an account? Please <Link to={'/login'}>Login</Link></small></p>
                <p>Forget Password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Please Reset</button></p>
            </Form>
        </div>
    );
}

export default RegisterReactBootstrap;