import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import CallLogs from './pages/CallLogs.jsx';
import Overview from './pages/Overview.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
      {
        path: "/",
        element: <Overview/>,
      },
      {
        path: "/call-logs",
        element: <CallLogs/>,
      },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}>
     <App />
     </RouterProvider>  
  </StrictMode>,
)
