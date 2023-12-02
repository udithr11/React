import React from "react";
import ReactDOM from "react-dom/client";
//default import
import HeaderComponent from "./components/header";
//named import
import Footer from "./components/footer";
import Body from "./components/body";
import About from "./components/About";
import Error from "./components/error";
import Contact from "./components/contact";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/restaurantMenu";



const AppLayout = function () {
  return (
    <>
      <React.Fragment>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </React.Fragment>
    </>
    // we can write react.fragment inside a react.fragment
  );
};

const appRouter= createBrowserRouter([
  {  
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {  
        path:'/about',
        element:<About/>,
      },
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'restaurant/:id',
        // dynamaic routhing
        element:<RestaurantMenu/>
      }

    ]
},

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);







