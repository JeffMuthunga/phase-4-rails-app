import React from 'react'
import styles from './Login.module.css'
import {Link} from 'react-router-dom'


function Login() {


  return (
    <div className={styles.body_container}>
    <form className={styles.form_container}>
      <div className={styles.logo_container}></div>
      <div className={styles.title_container}>
        <p className={styles.title}>Login to your Account</p>
        <span className={styles.subtitle}>
          Get started with our app, just create an account and enjoy the experience.
        </span>
      </div>
      <br />
      <div className={styles.input_container}>
        <label className={styles.input_label} htmlFor="email_field">
          Email
        </label>
        {/* <EmailIcon className="icon" /> */}
        <input
          placeholder="name@mail.com"
          title="Input title"
          name="input-name"
          type="text"
          className={styles.input_field}
          id="email_field"
        />
      </div>
      <div className={styles.input_container}>
        <label className={styles.input_label} htmlFor="password_field">
          Password
        </label>
        {/* <PasswordIcon className="icon" /> */}
        <input
          placeholder="********"
          title="Input title"
          name="input-name"
          type="password"
          className={styles.input_field}
          id="password_field"
        />
        <button className={styles.sign_in_btn}> 
        <Link to='/' style={{textDecoration: 'none',color: 'white'}}><span>Log in</span></Link>
        </button>
        <div className={styles.separator}>
          <hr className={styles.line}/>
          <span> Or</span>
          <hr className={styles.line}/>
        </div>

        <button className={styles.sign_in_apl} >
          <Link to='/signup' style={{textDecoration: 'none',color: 'white'}}><span>Sign up</span></Link>
        </button>
      </div>
    </form>
    </div>
  )
}

export default Login