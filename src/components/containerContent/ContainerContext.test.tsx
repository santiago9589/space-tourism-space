import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import ContainerContext from "./ContainerContext";
import { BrowserRouter } from "react-router-dom";

interface props {
    children: React.ReactNode
}

describe("<ContainerContext/>", () => {

    const RenderComponent = ({ children}: props) => {
        return (
            <BrowserRouter>
                <ContainerContext>
                    {children}
                </ContainerContext>
            </BrowserRouter>
        )
    }

    test("reenderiza correctamente", () => {
        render(<RenderComponent>
        </RenderComponent>)
        expect(screen.getByTestId("ContainerContext")).toBeInTheDocument()
    })

    test("reenderiza correctamente con el componente pasado por props", () => {
        render(<RenderComponent>
            <h1>Hola mundo</h1>
        </RenderComponent>)

        expect(screen.getByText("Hola mundo")).toBeInTheDocument()
    })

})