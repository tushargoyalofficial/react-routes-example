import React from "react";
import StackRoutes from "./routes/StackRoutes";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* All stack routes (unprotected) will render here */}
      <StackRoutes />
    </div>
  );
};

export default App;
