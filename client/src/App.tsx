import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
