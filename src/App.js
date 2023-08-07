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
import Pessoas from './components/formularios/Pessoas';
import CdPessoa from './screens/CdPessoas';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormScreen/>,
       
    },
    {
      path: "/Dependentes",
      element: <FormScreen/>
    },
    {
      path: "/Movimentos",
      element: <Landing/>
    },
    {
      path: "/Pessoas",
      element: <CdPessoa/>
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
