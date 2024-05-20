import React from 'react'
import classes from './SignUp.module.css'
import { Link } from 'react-router-dom';


function Auth() {

  return (
    <section className={classes.login}>
      {/* logo */}

      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="Password" />
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </section>
  );
}

export default Auth;



