import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("This testcases for Contact us Page",()=>{

    test("should load contact us component ",()=>{
        
        render(<Contact/>);
    
        const heading=screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument()
    
    })
    
    test("should load button inside contact us component ",()=>{
        
        render(<Contact/>);
    
        const button=screen.getByRole("button")
    
        expect(button).toBeInTheDocument()
    
    })
    
    test("should load text inside contact us component ",()=>{
        
        render(<Contact/>);
    
        const text=screen.getByText("Submit")
    
        expect(text).toBeInTheDocument()
    
    })
    
    test("should load input name inside contact us component ",()=>{
        
        render(<Contact/>);
    
        const placeholder=screen.getByPlaceholderText("Enter Your Name")
    
        expect(placeholder).toBeInTheDocument()
    
    })
    
    test("should load two input boxes inside contact us component ",()=>{
        
        render(<Contact/>);
    
        const textboxes=screen.getAllByRole("textbox")
    
        
        expect(textboxes.length).toBe(2)
    
    })
})
