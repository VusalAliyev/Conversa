import axios from 'axios';
import { BrowserRouter as Router, Routes, useNavigate, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
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

    const handleSave = (e) => {
        e.preventDefault();
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
        <Container maxWidth="xs">
            <Box sx={{ mt: 8, mb: 2 }}>
                <Typography variant="h5" align="center">Signup</Typography>
            </Box>
            <Box component="form" onSubmit={handleSave} >
                <TextField
                    label="UserName"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleUserNameChange(e.target.value)}
                />
                <TextField
                    label="Email"
                    type="email"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleEmailChange(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <TextField
                    label="ConfirmPassword"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Signup
                </Button>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body2" align="center">
                    Already have an account? <a href="/login">Login</a>
                </Typography>
            </Box>
        </Container>
    );
};

export default Register