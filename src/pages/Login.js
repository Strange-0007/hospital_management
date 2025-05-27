import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if admin credentials
    if (loginData.email === 'admin@dental.com' && loginData.password === 'password') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify({
        id: 'admin',
        email: loginData.email,
        name: 'Administrator',
        role: 'admin'
      }));
      navigate('/admin/dashboard');
      return;
    }
    
    // Check if client credentials
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === loginData.email && user.password === loginData.password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        role: 'client'
      }));
      navigate('/client/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="py-5" style={{ marginTop: '100px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                  <p className="text-center mb-0">
                    Don't have an account? <Link to="/register">Register here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;