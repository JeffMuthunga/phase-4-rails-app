import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [change, setOnChange] = useState(false);
  // login
  const login = (username, password) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
        } else if (response.loggedin) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "LoggedIn successfully!",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/dashboard");
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
    // send Data to rails
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className={styles.body_container}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div className={styles.logo_container}></div>
        <div className={styles.title_container}>
          <p className={styles.title}>Login to your Account</p>
          <span className={styles.subtitle}>
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <br />

        <div className={styles.input_container}>
          <label className={styles.input_label} htmlFor="email_field">
            Username
          </label>
          {/* <EmailIcon className="icon" /> */}
          <input
            placeholder="John Doe"
            onChange={(e) => setUsername(e.target.value)}
            title="Input title"
            name="input-name"
            type="text"
            className={styles.input_field}
            id="name_field"
          />
        </div>

        {/* <div className={styles.input_container}> */}
        {/* <label className={styles.input_label} htmlFor="email_field">
            Email
          </label> */}
        {/* <EmailIcon className="icon" /> */}
        {/* <input
            placeholder="name@mail.com"
            // onChange={(e) => setEmail(e.target.value)}
            title="Input email"
            name="input-email"
            type="email"
            className={styles.input_field}
            id="email_field"
          /> */}
        {/* </div> */}

        <div className={styles.input_container}>
          <label className={styles.input_label} htmlFor="password_field">
            Password
          </label>
          {/* <PasswordIcon className="icon" /> */}
          <input
            placeholder="********"
            title="Input title"
            onChange={(e) => setPassword(e.target.value)}
            name="input-name"
            type="password"
            className={styles.input_field}
            id="password_field"
          />
          <button
            // disabled={!username || !password}
            className={styles.sign_in_btn}
          >
            <span>Log in</span>
          </button>
        </div>

        <div className={styles.separator}>
          <hr className={styles.line} />
          <span> Or</span>
          <hr className={styles.line} />
        </div>

        {/* <button className={styles.sign_in_apl}> */}
        <Link
          to="/signup"
          className={styles.sign_in_apl}
          style={{ textDecoration: "none", color: "white" }}
        >
          <span>Sign up</span>
        </Link>
        {/* </button>  */}
        {/* <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField> */}
      </form>
    </div>
  );
}

export default Login;
