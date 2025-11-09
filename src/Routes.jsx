import Root from "./Components/Root/Root";
import Dashboard from "./Pages/DashboardPage/DashboardPage";
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