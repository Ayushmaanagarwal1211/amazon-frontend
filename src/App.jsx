import {  createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/authentication/Login'
import Homepage from './components/Homepage'
import Register from './components/authentication/Register'
import Cart from './components/cart/Cart'
import Layout from './components/Layout'
import useGet from './hooks/useGet'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './reducer/AmazonSlice'
import {AuthNavigate} from './components/authentication/Login'
import Profile from './components/Profile'
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
  },
  {
    element : <AuthNavigate/>,
    children : [
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path : "/profile",
        element : <Profile/>
      }
    ],
  },
  
])

function App() {
  const token = JSON.parse(localStorage.getItem("token"))
  const dispatch = useDispatch()
  const get = useGet()
  useEffect(()=>{
    if(token){
      get("http://localhost:5000/get-user")
      .then(res=>dispatch(setUser({user:res.data})))
    }
  },[])
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
