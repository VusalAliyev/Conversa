import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import '../assets/css/app.min.css'
// import '../assets/css/bootstrap.min.css'
// import '../assets/css/icons.min.css'

const Login = ({ changeUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      Password: password,
    };
    const url = 'http://localhost:5096/api/Account/login';
    axios.post(url, data).then((result) => {
      console.log(result);
      console.log("Salam");
      // window.location.href="/"
      navigate('/');
      const username = result.data.username; // API'den gelen kullanıcı adı verisi
      changeUsername(username);
    }).catch((error) => {
      alert(error);
    });
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, mb: 2 }}>
        <Typography variant="h5" align="center">Login</Typography>
      </Box>
      <Box component="form" onSubmit={handleSave} >
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" align="center">
          Don't have account? <a href="/register">register</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
