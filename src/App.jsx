import Contact from "./components/contact";
import React from 'react'
import Home from "./components/home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import MyParams from "./components/params";
import ErrorPage from "./components/errorpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home></Home></>,
    errorElement: <ErrorPage> </ErrorPage>
  },
  {
    path: "/contact",
    element: <><Nav></Nav> <Contact></Contact> <Footer></Footer></>
  },
  {
    path: "/myparams/:params/",
    element: <MyParams></MyParams>
  }
]);


function App() {
  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;