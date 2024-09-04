import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./components/Error";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import Menu from "./components/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="app">
          <Header />
          <Outlet />
        </div>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <AboutUs />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/menu/:id",
          element: <Menu />
        },
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;