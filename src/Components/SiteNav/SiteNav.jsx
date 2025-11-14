import { NavLink, useLocation } from 'react-router-dom'
import styles from './SiteNav.module.css'
import { useDispatch } from 'react-redux'
import { openPopup } from '../PopUp/popupSlice'

function SiteNav() {
    const dispatch = useDispatch()
    const location = useLocation()

    const navLinks = [
        { label: 'All collections', url: '/' },
        { label: 'My collections', url: '/mycollections' },
        { label: 'Users', url: '/users' },
        { label: 'One of my collections', url: '/oneofmycollections' },
    ]

    const isAllCollections =
        location.pathname === '/' || location.pathname === '/allcollections'

    return (
        <div className={styles.wrapper}>
            <nav className={styles.links}>
                {navLinks.map((navLink) => (
                    <NavLink
                        key={navLink.url}
                        to={navLink.url}
                        className={({ isActive }) =>
                            navLink.url === '/'
                                ? isAllCollections
                                    ? styles.activeLink
                                    : styles.inactiveLink
                                : isActive
                                ? styles.activeLink
                                : styles.inactiveLink
                        }
                    >
                        {navLink.label}
                    </NavLink>
                ))}
            </nav>
            {(location.pathname === '/allcollections' ||
                location.pathname === '/mycollections') && (
                <button
                    className={styles.newCollectionButton}
                    onClick={() => dispatch(openPopup('newcollection'))}
                >
                    + NEW COLLECTION
                </button>
            )}
        </div>
    )
}

export default SiteNav
