import { useState } from "react";
import "./nav.css";

function NavBar({ isOpenMenu, toggleMenu }) {
    const [isLogin, setIsLogin] = useState(false)

    return ( 
        <div className="navbar-custom">
            <div className="icon" style={{ fontSize: '50px' }} onClick={()=> toggleMenu()}>
                <i className="fa-solid fa-bars"></i>
            </div>
            {
                isOpenMenu && (
                    <>
                    {/* <div className="form-login">
                <div className="form-input">
                    <label htmlFor="">Enter your username</label>
                    <input type="text" className="input-text" />
                </div>
                <div className="form-input">
                    <label htmlFor="">Enter your password</label>
                    <input type="password" className="input-text" />
                </div>

                <div className="action">
                <button className="button-sign">SignUp</button>
                <a href="">Forgot password?</a>
                </div>
            </div> */}
            <div className="menu">
                <img src="https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg" alt="" />
                <h1>(user name)</h1>
                <ul className="menu-list">
                    <li className="item">
                        Main Page
                    </li>
                    <li className="item">
                        Your saved papers
                    </li>
                    <li className="item">
                        Contact
                    </li>
                    <li className="item">Logout</li>
                </ul>
            </div>
                    </>
                )
            }
        </div>
     );
}

export default NavBar;