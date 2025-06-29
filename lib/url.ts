import qs from 'query-string'

interface urlQueryParams {
    params: string,
    key: string,
    value: string,
}

export const formUrlQuery = ({ params, key, value }: urlQueryParams) => {
    const queryString = qs.parse(params)
    // {params:"......"} save it as object

    queryString[key] = value

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    })


}
interface RemoveUrlQueryParams {
    params: string,
    keysToRemove: string[],
}



export const removeKeysFromQuery = ({ params, keysToRemove }: RemoveUrlQueryParams) => {

    const queryString = qs.parse(params)
    // {params:"......"} save it as object

    keysToRemove.forEach((key) => {
        delete queryString[key]
    })

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    }, { skipNull: true })
}