import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import FormScreen from './screens/FormScreen';
import Landing from './screens/Landingpage';
import Teste from './components/Test';
import FormComponent from './components/Formulario';
import Login from './screens/Login';
import Registrar from './screens/Registrar';
import Profile from './screens/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormScreen/>,
       
    },
    {
      path: "/Landing",
      element: <Landing/>
    },
    {
      path: "/Testes",
      element: <FormComponent/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Signup",
      elemente: <Registrar/>
    },
    {
      path: "/MinhaPagina",
      element: <Profile/>
    }

    
   ])
  return (
    <div>
    <RouterProvider router={router}> </RouterProvider>
   </div>
  );
}

export default App;
