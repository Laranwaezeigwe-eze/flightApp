import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './components/store/store.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import ROUTES from "./components/router/routes";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    ...ROUTES
])
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
    </Provider>
</LocalizationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
