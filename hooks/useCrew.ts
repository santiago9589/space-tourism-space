import { useState, useEffect } from "react"
import { api } from "../api/api"
import { Crew } from "../src/types/crew"

export const useCrew = (): [Crew[], Crew, (crew: Crew) => void] => {
    const [data, setData] = useState<Crew[]>([])
    const [currentCrew, setcurrentCrew] = useState<Crew>({
        name: "",
        images: {
            png: "",
            webp: ""
        },
        role: "",
        bio: ""
    })

    useEffect(() => {
        api.crew().then((response) => {
            setData(response)
            setcurrentCrew(response[0])
        })
    }, [])

    const handleCrew = (crew: Crew) => {
        if (!crew) return
        setcurrentCrew(crew)
    }

    return [data, currentCrew, handleCrew]
}