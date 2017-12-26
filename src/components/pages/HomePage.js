import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/login"><h4>Login</h4></Link>
  </div>
)

export default HomePage;
