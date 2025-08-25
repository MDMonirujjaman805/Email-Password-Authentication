import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-5xl font-bold">🥹🥹Opps</h1>
      <h1 className="text-3xl font-bold">404-Page Not Found</h1>
      <p className="text-xl font-bold">
        The page you are looking for does not exist.
      </p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
