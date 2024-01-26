import { createBrowserRouter } from "react-router-dom";
import CreateUser from "./CreateUser";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <CreateUser />,
  },
]);

export default router;
