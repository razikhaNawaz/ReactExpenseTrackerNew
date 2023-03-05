import React, { Fragment, useContext, useState } from 'react'
import AuthContext from '../Store/AuthContext';
import classes from './Authentication.module.css';

const Authentication = () => {
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const AuthCntx=useContext(AuthContext)
    const isLogin=AuthCntx.isLogin;

    const switchAuthHandler=AuthCntx.switchAuth;

    const switchHandler=()=>{
        switchAuthHandler()
    }

    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        const obj={
            userEmail:email,
            userPassword:password,
            returnSecureToken:true
        }
        AuthCntx.authFunction(obj)
    }
  return (
    <Fragment>
        <div className={classes.parent}>
        <form  onSubmit={submitHandler} className={classes.form}>
            <label>Email</label>
            <input type="email" placeholder='enter email' value={email} onChange={emailHandler}></input>
            <label>Password</label>
            <input type="password" placeholder='enter password' value={password} onChange={passwordHandler}></input>
            <div className={classes.buttonParent}>
            <button type="submit" className="btn btn-primary">
                {
                    isLogin ? 'login' : 'signUp'
                }
            </button>
            <button onClick={switchHandler} type="button" className="btn btn-primary">
                {
                    isLogin ? 'creare account' : 'login with account'
                }
            </button>
            </div>
        </form>
        </div>
    </Fragment>
  )
}

export default Authentication