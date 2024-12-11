import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Contect from "./components/Contect.jsx";
import Message_me from "./components/Message_me.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="Contect" element={<Contect />} />
      <Route path="Message_me" element={<Message_me />} />
    </Route>
  )
);
console.log(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
