import { useState } from "react";
import { auth } from "../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("Login successful ✅");
        console.log("Logged in user:", result.user);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Login error:", err.message);
      });
  };

  return (
    <div className="w-6/12 mx-auto min-h-[calc(100vh-218px)] flex items-center">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-5"
      >
        <legend className="fieldset-legend text-center pt-5 text-xl">
          Login Form
        </legend>

        {/* Email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          required
          className="input w-full"
          placeholder="Email"
        />

        {/* Password */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          required
          className="input w-full"
          placeholder="Password"
        />

        {/* Error / Success messages */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

        {/* Button */}
        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
