"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setUsername,
  toggleAuthMode,
  setUserData,
} from "../../../../redux/authSlice";
import { loginSchema, registerSchema } from "../validationSchema";
import { z } from "zod";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/navigation";

const AuthenticationContainer = () => {

  const dispatch = useDispatch();
  const { email, password, username, isLogin, userData } = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };

  const handleToggleAuthMode = () => {
    dispatch(toggleAuthMode());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let validationSchema = isLogin ? loginSchema : registerSchema;
    try {
      validationSchema.parse({ email, password, username });
      if (isLogin) {
        dispatch(setUserData({ email, username: "Test" }));
      } else {
        dispatch(setUserData({ email, username }));
      }
      router.push("/")
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert("Validation errors: " + error.errors.map((error) => `${error.message}`).join(", "));
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="authentication-wrapper w-full flex justify-center items-center">
      <div className="authentication-container w-[90%] bg-black text-white rounded-3xl flex items-stretch sm:flex-col sm:justify-evenly min-h-[635px]">
        <div className="authentication-container_image w-3/5 flex sm:w-full sm:order-2">
          <img
            src="/Authentication/Background.png"
            className="w-full h-full object-cover"
            alt="Authentication Background"
            draggable={false}
          />
        </div>

        <div className="authentication-authform w-2/5 flex flex-col items-center sm:w-full sm:order-1 gap-[2.25rem]">
          <div className="authentication-authform_heading w-full text-center">
            {isLogin ? "Login" : "Register"}
          </div>

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

          <div className="authform-breakpoint text-[#A8A8A8] select-none">
            {" "}
            - OR -{" "}
          </div>

          <form
            className="authform-emailauth flex flex-col items-center gap-[2.25rem] w-[90%]"
            onSubmit={handleSubmit}
          >
            {!isLogin && (
              <div className="authform-email-box w-full flex border-b-white border-b-2 p-2">
                <input
                  type="text"
                  className="bg-transparent text-white outline-none placeholder:text-white"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
            )}

            <div className="authform-email-box w-full flex border-b-white border-b-2 p-2">
              <input
                type="email"
                className="bg-transparent text-white outline-none placeholder:text-white"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="authform-password-box w-full flex border-b-white border-b-2 p-2">
              <input
                type="password"
                className="bg-transparent text-white outline-none placeholder:text-white"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              type="submit"
              className="bg-waitlist-btn w-fit rounded-2xl p-[2px]"
              disabled={isSubmitting}
            >
              <div className="btn-wrapper py-4 px-10 w-full flex bg-black active:bg-black/90 rounded-2xl">
                <div className="text-wrapper bg-waitlist-btn w-full bg-clip-text">
                  <p className="text-transparent">
                    {isLogin ? "Login" : "Register"}
                  </p>
                </div>
              </div>
            </button>
          </form>

          <div className="switch-auth-mode text-center">
            <button onClick={handleToggleAuthMode} className="text-white">
              {isLogin
                ? "Need an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationContainer;
