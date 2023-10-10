import Header from "./src/components/Header";
import Blog from "./src/pages/Blog";
import DetalleGuitarra from "./src/pages/DetalleGuitarra";
import DetallePost from "./src/pages/DetallePost";
import Home from "./src/pages/Home";
import Nosotros from "./src/pages/Nosotros";
import Tienda from "./src/pages/Tienda";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/nosotros",
        element: <Nosotros />,
      },

      {
        path: "/tienda",
        element: <Tienda />,
      },

      {
        path: "/guitarras/:url",
        element: <DetalleGuitarra />,
      },

      {
        path: "/posts/:url",
        element: <DetallePost />,
      },
    ],
  },
]);

export default router;
