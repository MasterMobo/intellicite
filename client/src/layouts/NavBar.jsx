import { useState } from "react";
import "./nav.css";
import { toast } from "react-toastify";

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
        name: '',
        email:'',
        password: '',
        confirmPass: ''
    })
    
  const handleLogin = () => {
      const i = JSON.parse(localStorage.getItem("user")) || {};
      if (!user.name || !user.password) {
        toast.error("Please enter your information to login");
        return;
      }else  if (i.name != user.name || i.password != user.password) {
        toast.error("Username or password does not match");
        return;
      } else {
        toast.success('Login success')
          setIsActive({ ...user });
          setUser({
              name: '',
              password : ''
          })
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
        localStorage.removeItem('user');
        setIsActive({})
    }

    const handleSignUp = () => {
        setIsSignUp(true);
    }

    const handleSignUpp = () => {
        if (!signUpForm.name || !signUpForm.email || !signUpForm.password || !signUpForm.confirmPass) {
            toast.error("Please enter your information to sign up");
            return;
        } else if (signUpForm.password != signUpForm.confirmPass) {
            toast.error("Password does not match");
                return;
        }
        else {
              localStorage.setItem("user", JSON.stringify(signUpForm));
              toast.success('Signup success')
            setIsSignUp(false);
          }
    }
    
    console.log('====================================');
    console.log(isActive);
    console.log('====================================');

  return (
    <div className={`navbar-custom ${isOpenMenu ? 'open' : 'close'}`}>
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
                        <h1>{JSON.parse(localStorage.getItem("user"))?.name}</h1>
                        <ul className="menu-list">
                          <li className="item">Main Page</li>
                          <li className="item">Your saved papers</li>
                          <li className="item" onClick={handleLogout}>Logout</li>
                        </ul>
                        </div>
          ) : (
          
                          <>
                              {
                                  isSignUp ? (
                                    <div className="form-login">
                                    <div className="form-input">
                                      <label htmlFor="">Enter your username</label>
                                      <input
                                        type="text"
                                        value={signUpForm.name}
                                        onChange={(e) => onChangeSignUpInput("name", e.target.value)}
                                        className="input-text"
                                      />
                                    </div>

                                    <div className="form-input">
                                        <label htmlFor="">Enter your email</label>
                                        <input
                                          type="email"
                                          value={signUpForm.email}
                                          onChange={(e) => onChangeSignUpInput("email", e.target.value)}
                                          className="input-text"
                                        />
                                      </div>

                                    <div className="form-input">
                                      <label htmlFor="">Enter your password</label>
                                      <input
                                        type="password"
                                        value={signUpForm.password}
                                        onChange={(e) => onChangeSignUpInput("password", e.target.value)}
                                        className="input-text"
                                      />
                                      </div>
                                          
                                      <div className="form-input">
                                        <label htmlFor="">Enter Confirm password</label>
                                        <input
                                          type="password"
                                          value={signUpForm.confirmPass}
                                          onChange={(e) => onChangeSignUpInput("confirmPass", e.target.value)}
                                          className="input-text"
                                        />
                                      </div>
                      
                                    <div className="action">
                                      <button className="button-sign" onClick={handleSignUpp}>Sign Up</button>
                                      <a href="" onClick={()=> setIsSignUp(false)}>Sign In</a>
                                    </div>
                                  </div>
                                  ): (
                                    <div className="form-login">
                                    <div className="form-input">
                                      <label htmlFor="">Enter your username</label>
                                      <input
                                        type="text"
                                        value={user.name}
                                        onChange={(e) => onChangeInput("name", e.target.value)}
                                        className="input-text"
                                      />
                                    </div>
                                    <div className="form-input">
                                      <label htmlFor="">Enter your password</label>
                                      <input
                                        type="password"
                                        value={user.password}
                                        onChange={(e) => onChangeInput("password", e.target.value)}
                                        className="input-text"
                                      />
                                    </div>
                      
                                    <div className="action">
                                      <button className="button-sign" onClick={handleLogin}>Sign In</button>
                                      <a href="#" onClick={handleSignUp}>Sign Up</a>
                                    </div>
                                  </div>
                                  )
                              }
                              </>
          )}
        </>
      )}
    </div>
  );
}

export default NavBar;
