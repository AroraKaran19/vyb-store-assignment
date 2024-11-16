"use client";
import React, { useState } from "react";

const AuthenticationContainer = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // switch between login and register
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="authentication-wrapper w-full flex justify-center items-center">
        <div className="authentication-container w-[90%] bg-black text-white rounded-3xl flex items-stretch sm:flex-col sm:justify-evenly min-h-[635px]">
          <div className="authentication-container_image w-3/5 flex items-center sm:w-full sm:order-2">
            <img
              src="/Authentication/Background.png"
              className="w-full h-full object-contain"
              alt="Authentication Background"
              draggable={false}
            />
          </div>

          <div className="authentication-authform w-2/5 flex flex-col items-center sm:w-full sm:order-1 gap-[2.25rem]">
            <div className="authentication-authform_heading w-full text-center">
              {isLogin ? "Login" : "Register"}
            </div>

            {/* Google Authentication */}
            <div className="authentication-googleauth bg-black border-white border-2 w-[70%] sm:w-[80%] rounded-2xl flex justify-center items-stretch gap-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-200 ease-in-out active:bg-white/80">
              <div className="google-icon-container flex items-center">
                <img
                  src="/Authentication/google.png"
                  alt="Google Icon"
                  className="select-none text-center"
                  draggable={false}
                />
              </div>
              <p className="select-none text-center flex items-center">
                {isLogin ? "Login with Google" : "Register with Google"}
              </p>
            </div>

            <div className="authform-breakpoint text-[#A8A8A8] select-none"> - OR - </div>

            {/* Form Section */}
            <form className="authform-emailauth flex flex-col items-center gap-[2.25rem] w-[90%]">
              <div className="authform-email-box w-full flex border-b-white border-b-2 p-2">
                <input
                  type="text"
                  className="bg-transparent text-white outline-none placeholder:text-white"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="authform-password-box w-full flex border-b-white border-b-2 p-2">
                <input
                  type="password"
                  className="bg-transparent text-white outline-none placeholder:text-white"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {!isLogin && (
                <div className="authform-password-box w-full flex border-b-white border-b-2 p-2">
                  <input
                    type="password"
                    className="bg-transparent text-white outline-none placeholder:text-white"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              )}

              <button type="submit" className="bg-waitlist-btn active:bg-waitlist-btn-hover w-fit rounded-2xl p-[2px]">
                <div className="btn-wrapper py-4 px-10 w-full flex bg-black rounded-2xl">
                  <div className="text-wrapper bg-waitlist-btn w-full bg-clip-text">
                    <p className="text-transparent">
                      {isLogin ? "Login" : "Register"}
                    </p>
                  </div>
                </div>
              </button>
            </form>

            <div className="toggle-auth text-center text-sm cursor-pointer text-[#A8A8A8]" onClick={toggleAuthMode}>
              {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationContainer;
