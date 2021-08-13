import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./Modal.css";
import CloseIcon from "@material-ui/icons/Close";
// import UserContext from "./context/userContext";
import { useHistory } from "react-router-dom";

export default function TransitionsModal(props) {
  // const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const close = () => {
    props.handleClose();
  };

  // const LoginToA = async (e) => {
  //   e.preventDefault();
  //   // alert("uuuu");
  //   const logInUser = { email, password };
  //   const loginRes = await Axios.post(
  //     "http://localhost:7071/users/login",
  //     logInUser
  //   );
  //   setUserData({
  //     token: loginRes.data.token,
  //     user: loginRes.data.user,
  //   });
  //   localStorage.setItem("auth-token", loginRes.data.token);
  //   history.push("/cart");
  // };

  return (
    <div>
      <Modal className="mmmmm" open={props.open} onClose={close}>
        <>
          <div className="closeButton" onClick={close}>
            <CloseIcon />
          </div>
          <div className="modalL">
            <div className="modalL__left">
              <div className="modalLLeft__top">
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
            </div>
            <div className="modalL__right">
              <div className="form">
                <div className="wrapper">
                  <div className="input__data">
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="underline"></div>
                    <label>Enter Email/Mobile number</label>
                  </div>
                  <div className="input__data">
                    <input
                      type="text"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="underline"></div>
                    <label>Enter Password</label>
                  </div>
                </div>

                <div className="form__button">
                  <button
                    style={{ cursor: "pointer" }}
                    // onClick={LoginToA}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <div style={{ marginLeft: "140px", padding: "15px" }}>Or</div>
                  <div className="form__button1">
                    <button>Request OTP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}