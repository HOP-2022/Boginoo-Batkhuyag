import {Home} from './frontend/pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/:id',
    element: <Home/>,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
