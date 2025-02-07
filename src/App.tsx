import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Games from "./Pages/Games/Games";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Define Root as a parent route */}
      <Route path="/" element={<Root />}>
        {/* Define Home as the default (index) route inside Root */}
        <Route index element={<Home />} />
        {/* Define Create as another child route of Root */}
        <Route path="Games" element={<Games />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
