import React from 'react'; // Import React
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Screen from './components/Screen/Screen';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github from './components/Github/Github';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Screen />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/user/:userid',
          element: <User/>
        },
        {
          path: '/github',
          element: <Github/>
        },

      ]
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
