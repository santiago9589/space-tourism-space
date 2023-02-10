import { describe, test, expect,vi } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import LinkComponent from "./link.navbar.component";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

interface props {
   title:string
   url:string
   active:boolean
   handleNavigate:()=>void
}

describe("<LinkComponent/>", () => {

    const handleNavigate = vi.fn()

    const RenderComponent = ({ title,url,active,handleNavigate }: props) => {
        return (
            <BrowserRouter>
                <LinkComponent title={title} url={url} active={active} handleNavigate={handleNavigate}/>
            </BrowserRouter>
        )
    }

    test("reenderiza correctamente", () => {
        render(<RenderComponent title="title" url="/url" active={true} handleNavigate={vi.fn()}/>)

        expect(screen.getByText("title")).toBeInTheDocument()
    })

    test("cuando le doy click debe llamar a la funcion", async() => {
        render(<RenderComponent title="title" url="/url" active={true} handleNavigate={handleNavigate}/>)
        
        await userEvent.click(screen.getByText("title"))
        expect(handleNavigate).toHaveBeenCalledTimes(1)
    })

})