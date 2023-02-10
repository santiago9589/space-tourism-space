import { describe, test, expect,vi } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import LinkComponentDestination from "./LinkDestination";

interface props {
    active: boolean
    title: string
    handleDestination: () => void
}

describe("<LinkComponentDestination/>", () => {

    const handleDestination = vi.fn()

    const RenderComponent = ({ active,title,handleDestination }: props) => {
        return (
            <BrowserRouter>
                <LinkComponentDestination title={title} active={active} handleDestination={handleDestination}/>
            </BrowserRouter>
        )
    }

    beforeEach(()=>{
        render(<RenderComponent title="title" active={true} handleDestination={ handleDestination}/>)
    })

    test("reenderiza correctamente", () => {
        expect(screen.getByText("title")).toBeInTheDocument()
    })

    test("cuando le doy click debe llamar a la funcion", async() => {   
        await userEvent.click(screen.getByText("title"))
        expect(handleDestination).toHaveBeenCalledTimes(1)
    })

})