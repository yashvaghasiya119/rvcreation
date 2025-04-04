import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Applayout } from './partials/applayout'
import { Home } from './partials/home'
import { Product } from './partials/product'
import { About } from './partials/about'
import { Contect } from './partials/contect'
import { Innerproduct } from './partials/innerproduct'
function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/product",
          element:<Product/>
        },
        {
          path:"/contect",
          element:<Contect/>
        },
        {
          path:"/product/:id",
          element:<Innerproduct/>
        }
      ]

    }
  ])

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
