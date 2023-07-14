import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import FormScreen from './screens/FormScreen';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormScreen/>,
       
    },

    
   ])
  return (
    <div>
    <RouterProvider router={router}> </RouterProvider>
   </div>
  );
}

export default App;
