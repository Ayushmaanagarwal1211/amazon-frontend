import {  createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/authentication/Login'
import Homepage from './components/Homepage'
import Register from './components/authentication/Register'
import Cart from './components/cart/Cart'
import Layout from './components/Layout'
const ErrorBoundary = () => (
  <div>
    <h1>Oops! Something went wrong.</h1>
    <p>We couldn't find the page you're looking for.</p>
  </div>
);

const routes = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "/cart",
        element : <Cart/>,
        errorElement : <ErrorBoundary/>
      },
      {
        path : "/",
        element : <Homepage/>
      }
    ]
  },
  {
    path : "/login",
    element : <Login/>
  },{
    path : "/register",
    element : <Register/>
  }
])

function App() {
  
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
