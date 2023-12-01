import React from "react";
import ReactDOM from "react-dom/client";
//default import
import HeaderComponent from "./components/header";
//named import
import Footer from "./components/footer";
import Body from "./components/body";







const AppLayout = function () {
  return (
    <>
      <React.Fragment>
        <HeaderComponent />
        <Body />
        <Footer />
      </React.Fragment>
    </>
    // we can write react.fragment inside a react.fragment
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);







