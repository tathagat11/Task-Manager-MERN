import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./registration.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { signin } from "../../redux/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      dispatch(signin({
        email: email,
        password: password,
      }))
  };
  return (
    <>
    
      <div className="signup-form">
        <div className="signup-form__form-group">
          <div className="mainText">Log in to Task Manager</div>
          <div className="subText">Enter your email and password to log into your account</div>
          <div className="field">
          <input type="text" placeholder="email" onChange={handleEmailChange}/>
          </div>
          <div className="field">
          <input
            type="password"
            name="Enter Password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          </div>
          <div className="signUpButton">
          <button type="submit" onClick={handleSubmit}>
            Log In
            <FontAwesomeIcon icon={faArrowRight} className="signUpIcon"/>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
