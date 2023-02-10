import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import ContainerChild from "./ContainerChild";
import { BrowserRouter } from "react-router-dom";

interface props {
    children: React.ReactNode
}

describe("<ContainerChild/>", () => {

    const RenderComponent = ({ children}: props) => {
        return (
            <BrowserRouter>
                <ContainerChild>
                    {children}
                </ContainerChild>
            </BrowserRouter>
        )
    }

    test("reenderiza correctamente", () => {
        render(<RenderComponent>
        </RenderComponent>)
        expect(screen.getByTestId("ContainerChild")).toBeInTheDocument()
    })

    test("reenderiza correctamente con el componente pasado por props", () => {
        render(<RenderComponent>
            <h1>Hola mundo</h1>
        </RenderComponent>)

        expect(screen.getByText("Hola mundo")).toBeInTheDocument()
    })

})