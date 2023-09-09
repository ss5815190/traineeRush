import React ,{ lazy, Suspense} from 'react';
import Product from './page/Product';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function Loading() {
  return (
    <div>Loading...</div>
  )
}

function App() {
  const Login = lazy(() => import ('./page/Login'));
  const router = createBrowserRouter([
    {
      // errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Product /> },
        { path: '/login', element: 
          <Suspense fallback={<Loading/>}>
            <Login/>
          </Suspense> },
        
      ],
    },
  ]);
  return (
    <div className="App"> 
      <RouterProvider router={router} />          
    </div>
  );
}

export default App;
