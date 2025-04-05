import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { NewNote } from "./pages/CreateNote";
import { Note } from "./pages/Note";
import { EditNote } from "./pages/EditNote";
import { supabase } from "./libs/supabase";
import { redirect } from "react-router-dom";

const authLoader = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user", user);
  if (!user) {
    return redirect("/login");
  }
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: authLoader,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/new",
    element: <NewNote />,
    loader: authLoader,
  },
  {
    path: "/note/:id",
    element: <Note />,
    loader: authLoader,
  },
  {
    path: "/note/:id/edit",
    element: <EditNote />,
    loader: authLoader,
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
