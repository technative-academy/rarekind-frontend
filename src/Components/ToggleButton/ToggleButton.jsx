import { FaSortUp, FaSortDown } from 'react-icons/fa6'

import { useDispatch, useSelector } from 'react-redux'
import { hideContent, showContent } from '../../Slices/toggleContentSlice'

import styles from './ToggleButton.module.css'

export default function ToggleButton() {
    const dispatch = useDispatch()
    const selectedToggle = useSelector((state) => state.toggle.selectedToggle)

    const handleToggle = () => {
        if (selectedToggle) {
            dispatch(hideContent())
        } else {
            dispatch(showContent('toggle'))
        }
    }
    return (
        <button className={styles.showButton} onClick={handleToggle}>
            {selectedToggle ? (
                <>
                    SEE MORE <FaSortDown />
                </>
            ) : (
                <>
                    SEE LESS <FaSortUp />
                </>
            )}
        </button>
    )
}
