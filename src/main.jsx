import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import AddQuiz from "./pages/AddQuiz/AddQuiz.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/add-quiz",
        element: <AddQuiz />,
      },
      {
        path: "/quiz/:questionId",
        element: <Quiz />,
      },
      {
        path:"/dashboard",
        element:<Dashboard />
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
