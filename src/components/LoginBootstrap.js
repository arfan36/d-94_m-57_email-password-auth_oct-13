import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email;
        const password = form.password;
    };

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input name='email' type="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input name='password' type="password" className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <p><small>New to this website? Please <Link to={'/register'}>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;