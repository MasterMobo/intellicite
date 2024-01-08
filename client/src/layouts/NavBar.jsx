import { useState, useEffect } from "react";
import "./nav.css";
import { toast } from "react-toastify";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

function NavBar({ isOpenMenu, toggleMenu }) {
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState({
        name: "",
        password: "",
    });
    const [isActive, setIsActive] = useState(
        JSON.parse(localStorage.getItem("user")) || false
    );
    const [isSignUp, setIsSignUp] = useState(false);
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    });

    const handleLogin = async () => {
        if (!user.name || !user.password) {
            toast.error("Please enter your information to login");
            return;
        } else {
            await handleLoginAPI(user.name, user.password);
        }
    };

    const onChangeInput = (name, value) => {
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onChangeSignUpInput = (name, value) => {
        setSignUpForm({
            ...signUpForm,
            [name]: value,
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsActive({});
    };

    const handleSignUp = () => {
        setIsSignUp(true);
    };

    const handleSignUpp = async () => {
        if (
            !signUpForm.name ||
            !signUpForm.email ||
            !signUpForm.password ||
            !signUpForm.confirmPass
        ) {
            toast.error("Please enter your information to sign up");
            return;
        } else if (signUpForm.password != signUpForm.confirmPass) {
            toast.error("Password does not match");
            return;
        } else {
            await handleSignUpAPI(
                signUpForm.name,
                signUpForm.email,
                signUpForm.password
            );
        }
    };

    const handleLoginAPI = async (email, pass) => {
        try {
            const res = await axios.post(`${apiUrl}/auth/login`, {
                email: email,
                password: pass,
            });

            toast.success("Login success");
            setIsActive({ ...user });
            setUser({
                name: "",
                password: "",
            });

            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.token);
        } catch (error) {
            toast.error("Something went wrong, please try again");
        }
    };

    const handleSignUpAPI = async (username, email, pass) => {
        try {
            const res = await axios.post(`${apiUrl}/auth/register`, {
                username: username,
                email: email,
                password: pass,
            });
            toast.success("Successfully registered new account");
            setIsSignUp(false);

            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.token);
        } catch (error) {
            toast.error("Something went wrong, please try again");
        }
    };

    return (
        <div className={`navbar-custom ${isOpenMenu ? "open" : "close"}`}>
            <div
                className="icon"
                style={{ fontSize: "35px", marginTop: "75px" }}
                onClick={() => toggleMenu()}
            >
                <i className="fa-solid fa-bars"></i>
            </div>
            {isOpenMenu && (
                <>
                    {isActive?.name ? (
                        <div className="menu">
                            <img
                                src="https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg"
                                alt=""
                            />
                            <h1>
                                {JSON.parse(localStorage.getItem("user"))?.name}
                            </h1>
                            <ul className="menu-list">
                                <li className="item">Main Page</li>
                                <li className="item">Your saved papers</li>
                                <li className="item" onClick={handleLogout}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            {isSignUp ? (
                                <div className="form-login">
                                    <div className="form-input">
                                        <label htmlFor="">
                                            Enter your username
                                        </label>
                                        <input
                                            type="text"
                                            value={signUpForm.name}
                                            onChange={(e) =>
                                                onChangeSignUpInput(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="form-input">
                                        <label htmlFor="">
                                            Enter your email
                                        </label>
                                        <input
                                            type="email"
                                            value={signUpForm.email}
                                            onChange={(e) =>
                                                onChangeSignUpInput(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="form-input">
                                        <label htmlFor="">
                                            Enter your password
                                        </label>
                                        <input
                                            type="password"
                                            value={signUpForm.password}
                                            onChange={(e) =>
                                                onChangeSignUpInput(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="form-input">
                                        <label htmlFor="">
                                            Enter Confirm password
                                        </label>
                                        <input
                                            type="password"
                                            value={signUpForm.confirmPass}
                                            onChange={(e) =>
                                                onChangeSignUpInput(
                                                    "confirmPass",
                                                    e.target.value
                                                )
                                            }
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="action">
                                        <button
                                            className="button-sign"
                                            onClick={handleSignUpp}
                                        >
                                            Sign Up
                                        </button>
                                        <a
                                            href=""
                                            onClick={() => setIsSignUp(false)}
                                        >
                                            Sign In
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="form-login">
                                    <div className="form-input">
                                        <label htmlFor="">
                                            Enter your Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={user.name}
                                            onChange={(e) =>
                                                onChangeInput(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            className="input-text"
                                        />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="">
                                            Enter your password
                                        </label>
                                        <input
                                            type="password"
                                            value={user.password}
                                            onChange={(e) =>
                                                onChangeInput(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="action">
                                        <button
                                            className="button-sign"
                                            onClick={handleLogin}
                                        >
                                            Sign In
                                        </button>
                                        <a href="#" onClick={handleSignUp}>
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default NavBar;
