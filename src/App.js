import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import PatternFrom from './components/PatternForm/PatternForm';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PatternFrom/>,
       
    },

    
   ])
  return (
    <div>
    <RouterProvider router={router}> </RouterProvider>
   </div>
  );
}

export default App;
