import React, {Component} from 'react';
import styles from '../Register/mystyles.module.css';
import 'boxicons';
import LoginImg from '../assets/img/login.svg';


class Register extends Component {
    render() {
        
        return (
            <body>
                <div className={styles.login}>
                    <div className={styles.login__content}>
                        <div className={styles.login__img}>
                            <img src={LoginImg} alt=""></img>
                        </div>

                        <div className={styles.login__forms}>
                            <form action="" className={styles.login__create} id="login-up">
                                <h1 className={styles.login__title}>Create Account</h1>

                                <div className={styles.login__box}>
                                    <box-icon name='user'></box-icon>
                                    <input type="text" placeholder="Username" className={styles.login__input}></input>
                                </div>

                                <div className={styles.login__box}>
                                    <box-icon name='envelope'></box-icon>
                                    <input type="text" placeholder="Email" className={styles.login__input}></input>
                                </div>

                                <div className={styles.login__box}>
                                    <box-icon name='lock'></box-icon>
                                    <input type="password" placeholder="Password" className={styles.login__input}></input>
                                </div>

                                <a href="#" className={styles.login__button}>Sign Up</a>

                                <div>
                                    <span className={styles.login__account}>Already have an Account?</span>
                                    <span className={styles.login__signup} id="sign-in"><a className={styles.link} href="login">Sign In</a></span>
                                </div>

                                <div className={styles.login__social}>
                                    <a href="#" className={styles.login__social_icon}><box-icon name='facebook' type='logo' ></box-icon></a>
                                    <a href="#" className={styles.login__social_icon}><box-icon name='twitter' type='logo' ></box-icon></a>
                                    <a href="#" className={styles.login__social_icon}><box-icon name='google' type='logo' ></box-icon></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
    }

}

export default Register;