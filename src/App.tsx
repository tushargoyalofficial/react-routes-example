import React from "react";
import Login from "./containers/Login";
import Sidebar from "./containers/Sidebar";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Sidebar />
    </div>
  );
};

export default App;
