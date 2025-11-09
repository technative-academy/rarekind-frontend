import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import routes from './Routes.jsx'
import styles from './main.module.css'
import './global.css'
import PopupRoot from './Components/PopUp/Popup.jsx'

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} className={styles.router} />
            <PopupRoot />
        </Provider>
    </React.StrictMode>
)
