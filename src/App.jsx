import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import ErrorPage from "./page/ErrorPage";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProjectsPage from "./page/ProjectsPage";
import ContactPage from "./page/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
