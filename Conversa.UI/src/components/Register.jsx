import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../assets/css/app.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.min.css'
import '../assets/images/favicon.ico'

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUserNameChange = (value) => {
        setUserName(value);
    };

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
    };

    const handleSave = () => {
        const data = {
            Username: userName,
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword
        };
        console.log(data);
        const url = 'http://localhost:5096/api/Account/register';
        axios.post(url, data)
            .then((result) => {
                alert(result.data);
                console.log(result.data);
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div className="account-pages my-5 pt-sm-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <h4>Sign up</h4>
                            <p className="text-muted mb-4">Get your Conversa account now.</p>
                        </div>

                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-3">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <div className="input-group bg-light-subtle rounded-3 mb-3">
                                                <span className="input-group-text text-muted" id="basic-addon5">
                                                    <i className="ri-mail-line"></i>
                                                </span>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="form-control form-control-lg bg-light-subtle border-light"
                                                    placeholder="Enter Email"
                                                    aria-label="Enter Email"
                                                    aria-describedby="basic-addon5"
                                                    onChange={(e) => handleEmailChange(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon6">
                                                    <i className="ri-user-2-line"></i>
                                                </span>
                                                <input
                                                    id="username"
                                                    type="text"
                                                    className="form-control form-control-lg bg-light-subtle border-light"
                                                    placeholder="Enter Username"
                                                    aria-label="Enter Username"
                                                    aria-describedby="basic-addon6"
                                                    onChange={(e) => handleUserNameChange(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon7">
                                                    <i className="ri-lock-2-line"></i>
                                                </span>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control form-control-lg bg-light-subtle border-light"
                                                    placeholder="Enter Password"
                                                    aria-label="Enter Password"
                                                    aria-describedby="basic-addon7"
                                                    onChange={(e) => handlePasswordChange(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon8">
                                                    <i className="ri-lock-2-line"></i>
                                                </span>
                                                <input
                                                    id="confirmPassword"
                                                    type="password"
                                                    className="form-control form-control-lg bg-light-subtle border-light"
                                                    placeholder="Confirm Password"
                                                    aria-label="Confirm Password"
                                                    aria-describedby="basic-addon8"
                                                    onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-block waves-effect waves-light"
                                                onClick={handleSave}
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            
                            <p>Already have an account? <a href="/login" className="fw-medium text-primary"> Login </a></p>
                            <p>© 2023 Conversa. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register