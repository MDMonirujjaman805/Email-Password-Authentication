import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div><Header /></div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Main;
