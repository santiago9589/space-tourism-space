import { describe, test, expect, vi } from "vitest";
import { screen, render, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import NavbarComponent from "./navbar.component";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'



const navMock = vi.fn()



vi.mock("../../../hooks/useLinks", () => {
    return {
        useLinks: () => [[{
            title: "01 home",
            url: "/"
        }]]
    }
})

vi.mock("../../../hooks/useCustomNav", () => {
    return {
        useCustomNav: () => [navMock]
    }
})



describe("<NavbarComponent/>", () => {

    const RenderComponent = () => {
        return (
            <BrowserRouter>
                <NavbarComponent />
            </BrowserRouter>
        )
    }

    beforeEach(() => {
        render(<RenderComponent />)
    })

    test("reenderiza correctamente", async () => {
        await waitFor(() => {
            expect(screen.getByText("01 home")).toBeInTheDocument()
        })
    })

    test("si le doy click al logo llamo a la funcion para direccionar a home", async () => {
        await userEvent.click(screen.getByTestId("logoNavInicio"))
        expect(navMock).toBeCalledTimes(1)
    })

    test("si le doy click al icon de bar aparece en el documento", async () => {
     
        userEvent.click(screen.getByTestId("logoAside"))
      
        await waitFor(()=>{
            expect(screen.getByTestId("asideComponent")).toBeInTheDocument()
        })
        
    })



})

