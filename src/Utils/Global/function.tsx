import './variable'
import { backend_url } from './variable'

export {
    fetchBack
}

/**
 * 
 * @param url The route to the back without the domain
 * @param method the method of request (GET, POST ....)
 * @param headers The header of the request
 * @param body The body
 */
async function fetchBack(url: string, method: string, headers: string[][], body: Object){
    let response = await fetch(`${backend_url}${url}`, {
        headers,
        method,
        body: JSON.stringify(body)
    })

    if (response.ok) {
        return await response.json()
    } else {
        console.log(`This request got an error ${response.status}`)
        return await response.json()
    }
}