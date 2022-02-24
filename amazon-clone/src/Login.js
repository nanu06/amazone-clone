import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from './firebase';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(event) {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/', { replace: true })
      })
      .catch((e) => alert(e.message));
  }

  function signin(event) {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/', { replace: true })
      })
      .catch((e) => alert(e.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazpn-logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email "
          />
          <h5>Password </h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            className="login__signInButton"
            onClick={signin}
            type="submit"
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
