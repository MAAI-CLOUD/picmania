import qs from 'qs'

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path: string = ""): string {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path: string, urlParamsObject: object = {}, options: object = {}) {
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    };

    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`
    try {
        const response = await fetch(requestUrl, mergedOptions)
        if (!response.ok) {
            throw new Error('fetchAPI: No se pudo obtener respuesta en el servicio. requestUrl:' + requestUrl + ', status:' + response.status + ', statusText:' + response.statusText)
        }
        return await response.json()

    } catch (e: any) {
        console.error(e);
        throw e
    }
}