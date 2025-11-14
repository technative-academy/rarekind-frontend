import Root from './Components/Root/Root'
import Users from './Pages/UsersPage/UsersPage'
import AllCollections from './Pages/AllCollectionsPage/AllCollectionsPage'
import MyCollections from './Pages/MyCollectionsPage/MyCollectionsPage'
import OneOfMyCollections from './Pages/OneOfMyCollectionsPage/OneOfMyCollectionsPage'

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <AllCollections />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'allcollections',
                element: <AllCollections />,
            },
            {
                path: 'mycollections',
                element: <MyCollections />,
            },
            {
                path: 'oneofmycollections',
                element: <OneOfMyCollections />,
            },
        ],
    },
]

export default routes
