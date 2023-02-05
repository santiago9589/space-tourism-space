import { useState, useEffect } from "react"
import { api } from "../api/api"
import { Technology } from "../src/types/technology"

export const useTech = (): [Technology[], Technology, (tecnology: Technology) => void] => {
    const [data, setData] = useState<Technology[]>([])
    const [currentTech, setcurrentTech] = useState<Technology>({
        name: "",
        images: {
            portrait: "",
            landscape: ""
        },
        description: ""
    })

    useEffect(() => {
        api.technology().then((response) => {
            setData(response)
            setcurrentTech(response[0])
        })
    }, [])

    const handleTech = (tecnology: Technology) => {
        if (!tecnology) return
        setcurrentTech(tecnology)
    }

    return [data, currentTech, handleTech]
}