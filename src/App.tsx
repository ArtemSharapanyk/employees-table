import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import setupStore from "./redux";
import "normalize.css";
import "./assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";
import { AppLayout } from "./components/Layout/AppLayout";

function App() {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <AppLayout />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
