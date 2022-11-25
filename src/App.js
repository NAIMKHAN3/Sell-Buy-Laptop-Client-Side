import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Page/Router/Router';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </QueryClientProvider>

  );
}

export default App;
