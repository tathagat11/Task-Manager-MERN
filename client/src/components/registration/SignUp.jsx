import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./registration.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { register } from "../../redux/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      register({
        username: username,
        password: password,
        email: email
      })
    )
  };

  return (
    <>
      <div className="signup-form">
        <div className="signup-form__form-group">
          <div className="mainText">Sign up and never miss a task again</div>
          <div className="subText">
            Enter your email address and choose a password to set up your
            account
          </div>
          <div className="field">
            <input 
              type="text" 
              placeholder="username" 
              onChange={handleUsernameChange}
            />
          </div>
          <div className="field">
            <input 
              type="email" 
              name="Enter Email" 
              placeholder="email"
              onChange={handleEmailChange}
            />
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
              Sign up
              <FontAwesomeIcon icon={faArrowRight} className="signUpIcon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
