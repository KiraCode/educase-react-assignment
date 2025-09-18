import React from "react";
import Login from "./components/Login";
import WelcomePage from "./components/WelcomePage";
import Signup from "./components/Signup";
import MyAccount from "./components/MyAccount";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      {/* <Login /> */}
      {/* <WelcomePage/> */}
      {/* <Signup /> */}
      <MyAccount />
    </div>
  );
};

export default App;
