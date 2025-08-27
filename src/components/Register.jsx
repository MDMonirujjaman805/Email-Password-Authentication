import { NavLink } from "react-router";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";

export default function Register() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(name, photo, email, password, terms);

    // 6 character validetion.
    if (password.length < 6) {
      setError("Password should be 6 characters or longer.");
      return;
    }

    // One upercase,one lowercase,one number,one special character Password validetion.
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[{\]};:'",<.>/?])(?=.{8,20}$)/;
    if (!regex.test(password)) {
      setError(
        "At least one upercase,one lowercase,one number,one special character password."
      );
      return;
    }

    // Terms and conditions validetion.
    if (!terms) {
      setError("Please Accept Our Terms and Conditions.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setSuccess("Account created successfully ✅");
      console.log("User registered:", result.user);
     

      // Email Varefication
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("sent email varication.");
        })
        // update profile name and photo.
        const profile = {
          displayName:name,
          photoURL:photo
        }
        updateProfile(auth.currentUser,profile)
         .then(() => {
          console.log("Profile Updated!");
        })
        .catch((error) => {
          console.log("profile updated errror",error);
        })


        .catch((error) => {
          setError(error.message);
          console.error("Register error:", error.message);
        });
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Register a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your Name"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder-gray-500 focus:outline-indigo-500"
            />
          </div>

          {/* photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              required
              placeholder="Enter your Photo URL"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder-gray-500 focus:outline-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder-gray-500 focus:outline-indigo-500"
            />
          </div>

          {/* Password */}
          <div className=" relative">
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Create a password"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder-gray-500 focus:outline-indigo-500"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-sm absolute top-7.5 right-4 text-white bg-white/1 border-none"
            >
              {/* {showPassword ? <BiSolidHide /> : <MdRemoveRedEye />} */}
              {showPassword ? "hide" : "show"}
            </button>
          </div>

          {/* Error / Success messages */}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          {/* checkbox */}
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-2">
            {/* <legend className="fieldset-legend">Login options</legend> */}
            <label className="label">
              <input type="checkbox" name="terms" className="checkbox" />
              Accept Our Terms And Conditions.
            </label>
          </fieldset>

          {/* Button */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 font-semibold text-white hover:bg-indigo-400"
          >
            Register
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <NavLink
            to="/signin"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
