import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import WrapperNav from "./wrapperComponent";
import { BrowserRouter } from "react-router-dom";

interface props {
    children: React.ReactNode
    className: string
}

describe("<WrapperComponent/>", () => {

    const RenderComponent = ({ children, className }: props) => {
        return (
            <BrowserRouter>
                <WrapperNav className={className}>
                    {children}
                </WrapperNav>
            </BrowserRouter>
        )
    }

    test("reenderiza correctamente", () => {
        render(<RenderComponent className="bg-homepage">

        </RenderComponent>)

        expect(screen.getByRole("main")).toHaveClass("bg-homepage")
    })

    test("reenderiza correctamente con el componente pasado por props", () => {
        render(<RenderComponent className="bg-homepage">
            <h1>Hola mundo</h1>
        </RenderComponent>)

        expect(screen.getByText("Hola mundo")).toBeInTheDocument()
    })

})