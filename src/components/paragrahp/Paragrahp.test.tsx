import { describe, test,expect } from "vitest";
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Paragrahp from "./Paragrahp";


describe("<Paragrahp/>", () => {
    test("reenderiza con la props que se le pase", () => {
        render(<Paragrahp text="hola mundo" />)
        expect(screen.getByText("hola mundo")).toBeInTheDocument()
    })
})