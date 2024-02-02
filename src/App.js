import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Register from './component/Register';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Register />
    </React.Fragment>
  )
}

export default App;
