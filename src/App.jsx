import React ,{ lazy, Suspense} from 'react';
import Product from './page/Product';
import { RouterProvider, createHashRouter} from 'react-router-dom';
import OrderHistory from './components/OrderHistory/OrderHistory';
import getHistory from './components/OrderHistory/GetHistory';

function Loading() {
  return (
    <div>Loading...</div>
  )
}

function App() {
  const Login = lazy(() => import ('./page/Login'));
  const router = createHashRouter([
    {
      // errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Product /> },
        { path: '/login', element: 
          <Suspense fallback={<Loading/>}>
            <Login/>
          </Suspense> },
        {path: '/orderHistory', element:<OrderHistory/>, loader:getHistory},
        
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
