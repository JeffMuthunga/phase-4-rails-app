import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import giphy from "./giphy.gif";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [change, setOnChange] = useState(false);

  // sign up
  const signUp = (username, email, password) => {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
        if (response.errors) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.errors,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else if (response.signup) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Account created successfully!",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send Data to rails
    signUp(username, email, password);
  };

  return (
    <div className={styles.body_container}>
      <div className={styles.photo_container}>
        <h1>Join us</h1>
        <h2>Help us fund others</h2>
        <img src={giphy} alt="giphy" />
      </div>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <h2>Sign up</h2>

        <div className={styles.input_container}>
          <label className={styles.input_label}>Username</label>
          <input
            placeholder="Username"
            name="username-input"
            type="text"
            className={styles.input_field}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={styles.input_label}>Email</label>
          <input
            placeholder="email"
            name="email-input"
            type="email"
            className={styles.input_field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.input_label}>Password</label>
          <input
            placeholder="password"
            name="Password-input"
            type="password"
            className={styles.input_field}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <label className={styles.input_label}>Confirm password</label>
          <input
            placeholder="confirm password"
            name="confirm-password-input"
            type="password"
            className={styles.input_field}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}
        </div>

        <div className={styles.separator}>
          Have an account?{" "}
          <Link
            to="/login"
            styles={{
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
          <hr className={styles.line} />
        </div>
        {/* <h2>Sign up</h2>

        <div className={styles.input_container}>
          <label className={styles.input_label}>Username</label>
          <input
            placeholder="Username"
            name="username-input"
            type="text"
            className={styles.input_field}
          />
          <label className={styles.input_label}>Email</label>
          <input
            placeholder="email"
            name="email-input"
            type="email"
            className={styles.input_field}
          />
          <label className={styles.input_label}>Password</label>
          <input
            placeholder="password"
            name="Password-input"
            type="password"
            className={styles.input_field}
          />
          <label className={styles.input_label}>Confirm password</label>
          <input
            placeholder="confirm password"
            name="confirm-password-input"
            type="password"
            className={styles.input_field}
          />
        </div> */}
        <button className={styles.sign_in_btn}>
          {" "}
          <span>Create account</span>
        </button>
      </form>
    </div>
  );
}

export default Signup;
