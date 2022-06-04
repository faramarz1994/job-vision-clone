import React, { useState } from "react";
import { Provider } from "react-redux";
import Router from "./router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import store from "./redux/store";

//components

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
          position="top-right"
          theme="light"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </Provider>
  );
}

export default App;
