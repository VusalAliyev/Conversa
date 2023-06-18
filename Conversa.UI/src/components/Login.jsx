import React, { useState } from 'react';
import axios from 'axios'
import '../assets/css/app.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.min.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const HandleSave = () => {
    const data = {
      Email: email,
      Password: password,
    };
    console.log(data);
    const url = 'http://localhost:5096/api/Account/login';
    axios.post(url, data)
      .then((result) => {
        alert(result.data);
        console.log(result.data);

        if (result.data.IsSuccess) { // success propertysinin true olduğunu kontrol ediyoruz
          history.push('/'); // Başarılıysa '/home' sayfasına yönlendiriyoruz
        }
        else{
          history
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
              <a href="index.html" className="auth-logo mb-5 d-block">
                <img src="../assets/images/logo-dark.png" alt="" height="30" className="logo logo-dark" />
                <img src="../assets/images/logo-light.png" alt="" height="30" className="logo logo-light" />
              </a>

              <h4>Sign in</h4>
              <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
            </div>

            <div className="card">
              <div className="card-body p-4">
                <div className="p-3">
                  <form method="post">
                    {/* <!-- action="https://themesbrand.com/chatvia/layouts/index.html" --> */}
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <div className="input-group mb-3 bg-light-subtle rounded-3">
                        <span className="input-group-text text-muted" id="basic-addon3">
                          <i className="ri-user-2-line"></i>
                        </span>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control form-control-lg border-light bg-light-subtle"
                          placeholder="Enter Email"
                          aria-label="Enter Email"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleEmailChange(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="float-end">
                        <a href="auth-recoverpw.html" className="text-muted font-size-13">
                          Forgot password?
                        </a>
                      </div>
                      <label className="form-label">Password</label>
                      <div className="input-group mb-3 bg-light-subtle rounded-3">
                        <span className="input-group-text text-muted" id="basic-addon4">
                          <i className="ri-lock-2-line"></i>
                        </span>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="form-control form-control-lg border-light bg-light-subtle"
                          placeholder="Enter Password"
                          aria-label="Enter Password"
                          aria-describedby="basic-addon4"
                          onChange={(e) => handlePasswordChange(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-check mb-4">
                      <input type="checkbox" className="form-check-input" id="remember-check" />
                      <label className="form-check-label" htmlFor="remember-check">
                        Remember me
                      </label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary waves-effect waves-light"
                        type="submit"
                        onClick={HandleSave}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p>
                Don't have an account ? <a href="/register" className="fw-medium text-primary"> Signup now </a>
              </p>
              <p>
                &copy; <script>document.write(new Date().getFullYear())</script> Chatvia. Crafted with{' '}
                <i className="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
