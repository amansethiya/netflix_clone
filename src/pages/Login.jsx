import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Bg_banner from "../assets/background_banner.jpg";
import { login, signup } from "../firebase";

const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <div
      className="login h-[100vh] px-5 py-[8%] "
      style={{
        backgroundImage: `linear-gradient(#0000007e, #0000007e), url(${Bg_banner})`,
      }}
    >
      <img src={Logo} alt="" className="logo-login w-28" />
      <div className="login-form w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-[4px] p-16 m-auto">
        <h1 className="login-title text-3xl font-bold mb-7"> {signState} </h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="w-full h-12 bg-[#333] text-white  my-1 font-bold border-0 outline-0 rounded-[4px] px-4 py-5 text-xs placeholder:font-medium"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="w-full h-12 bg-[#333] text-white  my-1 font-bold border-0 outline-0 rounded-[4px] px-4 py-5 text-xs placeholder:font-medium"
            type="email"
            name="email"
            id=""
            placeholder="Your eMail"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="w-full h-12 bg-[#333] text-white  my-1 font-bold border-0 outline-0 rounded-[4px] px-4 py-5 text-xs placeholder:font-medium"
            type="password"
            name="pass"
            id=""
            placeholder="Your Password"
          />
          <button
            onClick={user_auth}
            className="w-full border-0 outline-0 text-xs  p-4 bg-[#e50914] text-white rounded-[4px] font-bold mt-5 cursor-pointer"
            type="submit"
          >
            {signState}
          </button>
          <div className="flex items-center justify-between mt-4 text-xs">
            <div className="form-help flex gap-2  ">
              <input type="checkbox" name="remember" id="" />{" "}
              <lable>Remember Me</lable>
            </div>
            <h1 className="">Need Help?</h1>
          </div>
        </form>
        <div className="form-switch mt-7 text-xs text-gray-400 flex flex-col gap-2">
          {signState === "Sign In" ? (
            <p>
              New to Netflix {"  "}
              <span
                className="font-bold text-white cursor-pointer "
                onClick={() => {
                  setsignState("Sign Up");
                }}
              >
                {" "}
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              or Existing User{"  "}
              <span
                className="font-bold text-white cursor-pointer"
                onClick={() => {
                  setsignState("Sign In");
                }}
              >
                {" "}
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
