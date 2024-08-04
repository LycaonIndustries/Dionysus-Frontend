import React, { useState } from "react";
import logo from "../assets/img/dionysus-logo-transparent.png";
import { LoginFormData, SignupFormData } from "../interfaces/General";

export const AuthForm: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormData({
      ...signupFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoginMode) {
      // Handle login logic here
      console.log("Login submitted:", loginFormData);
    } else {
      // Handle signup logic here
      console.log("Signup submitted:", signupFormData);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-white shadow-md border border-brand rounded-lg w-96 px-8 py-10 mb-4 bg-gradient-to-b from-secondary-950 from-10% to-secondary-950 to-95% via-secondary-800 via-45%">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Dionysus Logo" className="w-36 h-auto" />
        </div>

        <h2 className="text-center text-2xl font-bold mb-6">
          {isLoginMode ? "Sign in" : "Sign up"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            spellCheck="false"
            placeholder="Email"
            className="bg-transparent text-gray-200 placeholder-gray-500 outline-none px-4 py-2 border rounded-md focus:border-brand-light"
            value={isLoginMode ? loginFormData.email : signupFormData.email}
            onChange={isLoginMode ? handleLoginChange : handleSignupChange}
          />

          {!isLoginMode && ( // Conditionally render confirm password field
            <input
              name="username"
              spellCheck="false"
              className="bg-transparent text-gray-200 placeholder-gray-500 outline-none px-4 py-2 border rounded-md focus:border-brand-light"
              placeholder="Username"
              value={signupFormData.username}
              onChange={handleSignupChange}
            />
          )}

          <input
            type="password"
            name="password"
            spellCheck="false"
            className="bg-transparent text-gray-200 placeholder-gray-500 outline-none px-4 py-2 border rounded-md focus:border-brand-light"
            placeholder="Password"
            value={
              isLoginMode ? loginFormData.password : signupFormData.password
            }
            onChange={isLoginMode ? handleLoginChange : handleSignupChange}
          />

          {!isLoginMode && ( // Conditionally render confirm password field
            <input
              type="password"
              name="confirmPassword"
              spellCheck="false"
              className="bg-transparent text-gray-200 placeholder-gray-500 outline-none px-4 py-2 border rounded-md focus:border-brand-light"
              placeholder="Confirm Password"
              value={signupFormData.confirmPassword}
              onChange={handleSignupChange}
            />
          )}

          <button
            type="submit"
            className="bg-secondary-800 hover:bg-brand text-primary-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLoginMode ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center mt-4 text-brand-light">
            {isLoginMode ? (
              <> Don't have an account?</>
            ) : (
              <> Already Have An Account ? </>
            )}
            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-primary-100 bg-transparent py-0 px-2 hover:underline"
            >
              {isLoginMode ? <> Sign Up </> : <>Sign In </>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
