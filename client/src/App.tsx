import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import MainLayout from './pages/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
