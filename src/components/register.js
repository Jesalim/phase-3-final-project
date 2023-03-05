import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let data = {
        "name": name,
        "email": email,
        "password": password
    }

    const handleSubmit = () => {

        fetch("http://127.0.0.1:9292/user/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

    };

    
    return (
        <form className="container" onSubmit={(e)=> e.preventDefault()}>
            <h2>Register Here</h2>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => {
                e.preventDefault()
                setName(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => {
                    e.preventDefault()
                 setEmail(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="fs-6">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 col-lg-6">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => {
                    e.preventDefault();
                     setPassword(e.target.value)}} class="form-control" id="exampleInputPassword1" />
            </div>

         <Link to="/login">   <button type="submit" onClick={handleSubmit} class="btn btn-success">Submit</button></Link>
        </form>
    )
}

export default Register;