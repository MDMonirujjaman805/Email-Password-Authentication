import { NavLink } from "react-router";
import { auth } from "../firebase.init";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";

export default function SignIn() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("Login successful ✅");
        console.log("Signed in:", result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Sign Error", error.message);
      });
  };

  const handleForGotPassword = () => {
    // console.log("get me email address", emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please Give a valid Email Address.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password Reset Email, Please check your Email.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              required
              placeholder="Enter your email"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder-gray-500 focus:outline-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder-gray-500 focus:outline-indigo-500"
            />
            <button
              // to="forgotpassword"
              onClick={handleForGotPassword}
              className=" underline cursor-pointer text-xs font-light"
            >
              Forgot Password
            </button>
          </div>

          {/* Error / Success messages */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 font-semibold text-white hover:bg-indigo-400"
          >
            Sign In
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <NavLink
            to="/signup"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Create an account
          </NavLink>
        </p>
      </div>
    </div>
  );
}
