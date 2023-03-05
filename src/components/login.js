import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Pages from "./pages";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault();
      const users = JSON.parse(localStorage.getItem('users'));
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        alert(`Welcome, ${user.name}!`);
      } else {
        alert('Invalid email or password.');
      }
    };


    return (
        <form className="container" >
            <h2>Login Here</h2>
            <div className="mb-3 col-lg-6">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
            </div>
            <div className="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
           
            <Link to="/pages"><button type="submit" onSubmit={handleLogin} className="btn btn-success">Submit</button></Link>  
        </form>
    )
}

export default Login