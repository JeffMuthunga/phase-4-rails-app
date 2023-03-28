import React from 'react'
import styles from './Logout.module.css'
import { Link } from 'react-router-dom'
import giphy from './giphy.gif'

function Logout() {
  return (
    <div className={styles.body_container}>
        <div className={styles.photo_container}>
            <h1>Join us</h1>
            <h2>Help us fund others</h2>
            <img src={giphy} alt="giphy" />
        </div>
        <form className={styles.form_container}>

        <div className={styles.separator}>
            Have an account? <Link to='/login' styles={{
                textDecoration: 'none'
            }}>Log in</Link>
          <hr className={styles.line}/>
        </div>
        <h2>Sign up</h2>

            <div className={styles.input_container}>
            <label className={styles.input_label}>
                Username
            </label>
            <input
            placeholder= "Username"
            name= "username-input"
            type= "text"
            className={styles.input_field}
            />
            <label className={styles.input_label}>
            Email
            </label>
             <input
            placeholder= "email"
            name= "email-input"
            type= "email"
            className={styles.input_field}
            />
            <label className={styles.input_label}>
                Password
            </label>
             <input
            placeholder= "password"
            name= "Password-input"
            type= "password"
            className={styles.input_field}
            />
            <label className={styles.input_label}>
                Confirm password
            </label>
             <input
            placeholder= "confirm password"
            name= "confirm-password-input"
            type= "password"
            className={styles.input_field}
            />
            </div>
            <button className={styles.sign_in_btn}> <span>Create account</span></button>
        
            

        </form>

    </div>
  )
}

export default Logout