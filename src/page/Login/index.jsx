import React from 'react'
import classes from '../../styles/Login.module.css';

function Login() {
  return (
    <main className={classes.main}>
      <div className={classes.title}>
        <h1>Log</h1>
        <h1>In</h1>
      </div>
      <div className={classes.loginWrap}>
        <div className={classes.loginGrid}>
          <input className={classes.inputAccount} placeholder='E-mail' type="text" />
          <input className={classes.inputAccount} placeholder='Password' type="text" />
          <div className={classes.aa}>
            <input type="checkbox" id="agree"/>
            <label htmlFor="agree">i agree all statements in terms of service</label>
            <div className={classes.LoginButton}>
              <button>LOG IN</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login;