import authService from './authService'
import { store } from '../store/store'
import { showToast } from '../Slices/toastSlice'

const API_URL = import.meta.env.VITE_API_URL

const makeApiRequest = async (url, options = {}) => {
    // If headers not set, set as empty object
    options.headers = options.headers || {}
    // Include credentials for cross-origin requests
    // options.credentials = 'include'
    options.headers['Content-Type'] = 'application/json'

    //Try and get access token out of session storage
    let accessToken = authService.getAccessToken()
    // if there is one then it sets the authorisation header
    if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`
    }
    // Make the request
    try {
        let response = await fetch(`${API_URL}/${url}`, options)

        if (
            accessToken &&
            (response.status === 401 || response.status === 403)
        ) {
            // Attempt to refresh the access token and re-request
            try {
                accessToken = await authService.refreshAccessToken()
                if (accessToken) {
                    options.headers['Authorization'] = `Bearer ${accessToken}`
                    response = await fetch(`${API_URL}/${url}`, options)
                } else {
                    throw new Error('Unauthorized')
                }
            } catch (error) {
                await authService.logout()
                throw new Error('Unauthorized')
            }
        }

        if (response.status >= 400) {
            const data = await response.json()
            throw new Error(data.error || 'Fetch failed')
        }

        return await response.json()
    } catch (error) {
        store.dispatch(showToast(error.message))
        throw error
    }
}

export default makeApiRequest
