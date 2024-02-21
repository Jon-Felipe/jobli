import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './pages/Jobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
