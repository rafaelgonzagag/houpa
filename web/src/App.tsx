import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from "./components/Header";
import { Routes } from './routes/index';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
