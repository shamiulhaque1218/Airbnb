import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Component/Body/Body.jsx';
import Homes from './Component/Host/Homes/Homes.jsx';
import Host from './Component/Host/Host.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  {
    path: "/",
    element: <Host />,
    errorElement: <p />,
    children: [
      {
        path: "/host/homes",
        element: <Homes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
