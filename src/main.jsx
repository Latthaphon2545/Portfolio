import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/NavBar/navbar.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AfterShcool from './components/project/AfterShcool.jsx'
import Tower from './components/project/Tower.jsx'
import Marh from './components/project/Marh.jsx'
import CovidWar from './components/project/CovidWar.jsx'
import ReloadRocket from './components/project/ReloadRocket.jsx'
import CourseRegistration from './components/project/CourseRegistration.jsx'
import Food from './components/project/food.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/AfterShcool",
    element: <AfterShcool />,
  },
  {
    path: "/project/Tower",
    element: <Tower />,
  },
  {
    path: "/project/Marh",
    element: <Marh />,
  },
  {
    path: "/project/CovidWar",
    element: <CovidWar />,
  },
  {
    path: "/project/ReloadRocket",
    element: <ReloadRocket />,
  },
  {
    path: "/project/CourseRegistration",
    element: <CourseRegistration />,
  },
  {
    path: "/project/OnlineFoodOrdering",
    element: <Food />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
