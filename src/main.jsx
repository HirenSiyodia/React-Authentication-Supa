import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import PrivateLayout from './PrivateLayout'

const router = createBrowserRouter([
  {
    path:"",
    element:(<PrivateLayout/>),
    children:[
      {
        path:"",
        element:(<Home/>)
      },
      {
        path:"/login",
        element:(<Login/>)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router} />
  </>
)
