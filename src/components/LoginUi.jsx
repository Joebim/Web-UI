import React from 'react'
import styles from './../styles/LoginUi.scss';
import google from "./../assets/images/google.png"
import { FaCode } from "react-icons/fa6";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

export default function LoginUi() {
    return (
        <>
            <div className="containerlogin">
                <form>
                    <button className="btn btn-ghost">
                        <img src={google} alt="" height="50" width="50"></img>
                        Log in with Google
                    </button>

                    <small>or</small>

                    <div className="form-control">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email"></input>
                    </div>

                    <div className="form-control">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="password"></input>
                    </div>

                    <div className="checkbox-container">
                        <input type="checkbox" id="remember"></input>
                        <label for="remember">Remember me</label>

                        <a href="#">Forgot Password</a>
                    </div>

                    <button className="btn">Log in</button>

                    <small>Don't have an account? <a href="#">Sign up</a></small>
                </form>

                <div className="features">
                    <div className="feature">
                        <FaCode />                        <h3>Development</h3>
                        <p>A modern and clean design system for developing fast and powerful</p>

                    </div>
                    <div className="feature">
                        <AiOutlineGift />                        <h3>Features</h3>
                        <p>A modern and clean design system for developing fast and powerful</p>

                    </div>
                    <div className="feature">
                        <MdOutlineEdit />                        <h3>Updates</h3>
                        <p>A modern and clean design system for developing fast and powerful</p>

                    </div>
                </div>

            </div>
        </>
    )
}
