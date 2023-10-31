import React from 'react';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='container mx-auto my-3'>
      <Header></Header>
      <Main></Main>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;