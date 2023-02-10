import { NavigateFunction } from "react-router"
import { useNavigate } from "react-router-dom"


export const useCustomNav = (): [(url: string) => void] => {
    const navigate = useNavigate()

    const handleNavigate = (url:string) =>{
        navigate(url)
    }

    return [handleNavigate]
}
