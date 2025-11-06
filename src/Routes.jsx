import Root from "./Components/Root/Root";
import Dashboard from "./Pages/DashboardPage/DashboardPage";
import Login from "./Pages/LoginPage/LoginPage";
import Signup from "./Pages/SignupPage/SignupPage"; 
import Users from "./Pages/UsersPage/UsersPage";
import AllCollections from "./Pages/AllCollectionsPage/AllCollectionsPage";
import MyCollections from "./Pages/MyCollectionsPage/MyCollectionsPage";
import OneOfMyCollections from "./Pages/OneOfMyCollectionsPage/OneOfMyCollectionsPage";


const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "allcollections",
        element: <AllCollections />,
      },
      {
        path: "mycollections",
        element: <MyCollections />,
      },
      {
        path: "oneofmycollections",
        element: <OneOfMyCollections />,
      },
    ],
  },
];

export default routes;