import { describe, test, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";

import userEvent from "@testing-library/user-event";
import DestinationComponent from "./DestinationComponent";



// const handleDestinationMock = vi.fn().mockReturnValue(()=>{
//     return 1
// })

// const DestinationMock = [{
//     name: "Moon",
//     images: {
//         png: "../src/assets/destination/image-moon.png",
//         webp: "../src/assets/destination/image-moon.webp"
//     },
//     description: "Moon",
//     distance: "384,400 km",
//     travel: "3 days"
// },
// {
//     name: "Martes",
//     images: {
//         png: "../src/assets/destination/image-moon.png",
//         webp: "../src/assets/destination/image-moon.webp"
//     },
//     description: "Martes",
//     distance: "384,400 km",
//     travel: "3 days"
// }
// ]


// vi.mock("../../../hooks/useDestination", () => {
//     return {
//         useDestination: () => [DestinationMock, DestinationMock[], handleDestinationMock]
//     }
// })



describe("<DestinationComponent/>", () => {

    const RenderComponent = () => {
        return (
            <BrowserRouter>
                <DestinationComponent />
            </BrowserRouter>
        )
    }

    beforeEach(() => {
        render(<RenderComponent />)
    })

    test("reenderiza correctamente", async () => {
        expect(screen.getByText(/02 pick your destination/i)).toBeInTheDocument()
        expect(screen.getByTestId("article-info")).toBeInTheDocument()
        await waitFor(() => {
            expect(screen.getAllByText(/Moon/i).length).toBe(2)
        })

    })

    test("cuando le de click a un nuevo destino debe aparecer su informacion", async () => {
        await waitFor(() => {
            expect(screen.getByTestId(/Mars/i)).toBeInTheDocument()

        })
        await userEvent.click(screen.getByTestId(/Mars/i))
        await waitFor(() => {
            expect(screen.getByTestId(/Mars-id/i)).toBeInTheDocument()

        })

    })


})