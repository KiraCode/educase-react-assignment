import React from "react";
import Login from "./components/Login";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      {/* <Login /> */}
      <WelcomePage/>
    </div>
  );
};

export default App;
