import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Beranda from "../pages";
import Detail from "../pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
