import React, {Component} from 'react';
import styles from '../Login/mystyles.module.css';
import 'boxicons';
import LoginImg from '../assets/img/login.svg';


class Login extends Component {
    render() {
        
        return (
            <body>
                <div className={styles.login}>
                    <div className={styles.login__content}>
                        <div className={styles.login__img}>
                            <img src={LoginImg} alt=""></img>
                        </div>

                        <div className={styles.login__forms}>
                            <form action="" className={styles.login__register} id="login-in">
                                <h1 className={styles.login__title}>Sign In</h1>

                                <div className={styles.login__box}>
                                    <box-icon name='user'></box-icon>
                                    <input type="text" placeholder="Username" className={styles.login__input}></input>
                                </div>

                                <div className={styles.login__box}>
                                    <box-icon name='lock'></box-icon>
                                    <input type="password" placeholder="Password" className={styles.login__input}></input>
                                </div>

                                <a href="#" className={styles.login__forgot}>Forgot password?</a>

                                <a href="#" className={styles.login__button}>Sign In</a>

                                <div>
                                    <span className={styles.login__account}>Don't have an Account?</span>
                                    <span className={styles.login__signin} id="sign-up"><a className={styles.link} href="register">Sign Up</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
    }

}

export default Login;