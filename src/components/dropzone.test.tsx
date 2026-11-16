import { describe, it, expect } from "vitest"
import {render, screen } from "@testing-library/react"

import { Dropzone } from "./dropzone";

describe("Dropzone", () => {

    it("should display the 'AI Detector' title", () => {
        render(<Dropzone />);

        const title = screen.getByText("AI Detector");

        expect(title).toBeInTheDocument();
    })
})