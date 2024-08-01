import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import ErrorPage from "./page/ErrorPage";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProjectsPage from "./page/ProjectsPage";
import ContactPage from "./page/ContactPage";
import ProjectDetailPage from "./page/ProjectDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/projects",
        children: [
          { index: true, element: <ProjectsPage /> },
          { path: ":id", element: <ProjectDetailPage /> },
        ],
      },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
