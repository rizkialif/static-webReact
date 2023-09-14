import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import PagesTutorial from './pages/Tutorial';
import ErrorPage from './404';
import Footer from './components/Footer';
import Tendalama from './pages/Tendalama';
import Tendabaru from './pages/Tendabaru';
import Zte from './pages/zte';
import Huawei from './pages/Huawei';
import Ruckus from './pages/Ruckus';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>

  },
  {
    path:"/list-tutorial",
    element:<PagesTutorial/>
  },
  {
    path:"/tendalama",
    element:<Tendalama/>
  },
  {
    path:"/tendabaru",
    element:<Tendabaru/>
  },
  {
    path:"/zte",
    element:<Zte/>
  },
  {
    path:"/huawei",
    element:<Huawei/>
  },
  {
    path:"/ruckus",
    element:<Ruckus/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    {/* <App /> */}
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
