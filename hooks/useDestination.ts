import { Destination } from "../src/types/destination"
import { useState, useEffect } from "react"
import { api } from "../api/api"

export const useDestination = (): [Destination[], Destination, (destination: Destination) => void] => {
    const [data, setData] = useState<Destination[]>([])
    const [currentDestination, setcurrentDestination] = useState<Destination>({
        name: "",
        images: {
            png: "",
            webp: ""
        },
        description: "",
        distance: "",
        travel: ""
    })

    useEffect(() => {
        api.destination().then((response) => {
            setData(response)
            setcurrentDestination(response[0])
        })
    }, [])

    const handleDestination = (destination: Destination) => {
        if (!destination) return
        setcurrentDestination(destination)
    }

    return [data, currentDestination, handleDestination]
}