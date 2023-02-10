import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import AsideComponent from "./AsideComponent";
import { BrowserRouter, Location } from "react-router-dom";
import { LinksUrl } from "../../types/LinkUrl";
import userEvent  from "@testing-library/user-event";


interface props {
    children: React.ReactNode
    links: LinksUrl[]
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    location: Location
    handleNavigate: (url: string) => void
}

const setIsOpenMock = vi.fn()
const handleNavigateMock = vi.fn()
const linksMock: LinksUrl[] = [{
    title: "01 home",
    url: "/"
}]

const mockLoc: Location = {
    hash: "#test-hash",
    key: "test-key",
    pathname: "/test-pathname",
    search: "?test-search",
    state: {},
}




describe("<AsideComponent/>", () => {

    const RenderComponent = ({ children, ...rest }: props) => {
        return (
            <BrowserRouter>
                <AsideComponent {...rest}>
                    {children}
                </AsideComponent>
            </BrowserRouter>
        )
    }

    beforeEach(() => {
        render(<RenderComponent links={linksMock}
            setIsOpen={setIsOpenMock}
            location={mockLoc}
            handleNavigate={handleNavigateMock}>
        </RenderComponent>)
    })

    test("reenderiza correctamente", () => {

        expect(screen.getByTestId("asideComponent")).toBeInTheDocument()
    })

    test("reenderiza el link correctamente", () => {

        expect(screen.getByText("01 home")).toBeInTheDocument()
    })

    test("reenderiza se llama a la funcion de cierre correctamente", async () => {

        await userEvent.click(screen.getByRole("img"))

        expect(setIsOpenMock).toHaveBeenCalledTimes(1)
    })



})