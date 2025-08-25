import { NavLink } from "react-router";
import { auth } from "../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Signed in:", result.user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
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
          </div>

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
