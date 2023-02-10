import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import NavOptions from "./navOptions";



describe("<NavOptions/>", () => {

    test("reenderiza correctamente", () => {
        render(<NavOptions>
        </NavOptions>)
        expect(screen.getByRole("navigation")).toBeInTheDocument()
    })

    test("reenderiza correctamente con el componente pasado por props", () => {
        render(<NavOptions>
            <h1>Hola mundo</h1>
        </NavOptions>)
        expect(screen.getByText("Hola mundo")).toBeInTheDocument()
    })

})