import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Page/Router/Router';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './Page/Share/Firebase.config';
import { useDispatch } from 'react-redux';
import { setUser } from './app/features/auth/authSlice';

const queryClient = new QueryClient()

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }
    })
  }, [dispatch])
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: 'Labrada', fontSize: '18px' }} className="max-w-7xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </QueryClientProvider>

  );
}

export default App;
