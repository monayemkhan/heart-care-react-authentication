import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const {googleLogIn, handleResetPassword, handleNameChange ,handleEmailChange,handlePasswordChange, isLogin, handleRegistration, toggleLogin, error} = useAuth();
    
    return (
        <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-12 mx-auto shadow p-5 w-50">
                    <form onSubmit={handleRegistration}>
                        <h3 className="text-secondary text-center fw-bold mb-5">Please {isLogin ? 'Login' : 'Register'}</h3>

                        {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                        </div>}
                        <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                        </div>
                            <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                                </div>
                            </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered ?
                                </label>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3 text-danger">{error}</div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary  mx-3">
                            {isLogin ? 'Login' : 'Register'}
                            </button>
                            <Link className="text-secondary" to="/">Reset Password</Link>
                        </div>
                    </form>
                    <div className="from-group mt-5 text-center">
                        <button onClick={googleLogIn} className="btn btn-outline-danger fw-bold shadow" >Google Sign in</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;