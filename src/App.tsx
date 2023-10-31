import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyMenu from "./component/MyMenu";
import MyRouter from "./router/MyRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyMenu />
        <MyRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
