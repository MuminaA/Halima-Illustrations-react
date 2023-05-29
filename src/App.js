import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";

const Layout = () => {
  return (
   <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      }  
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
