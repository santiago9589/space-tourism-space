import { useState, useEffect } from "react"
import { api } from "../api/api"
import { LinksUrl } from "../src/types/LinkUrl"

export const useLinks = (): [LinksUrl[]] => {
    const [data, setData] = useState<LinksUrl[]>([])

    useEffect(() => {
        api.list().then((response) => {
            setData(response)
        })
    }, [])

    return [data]
}