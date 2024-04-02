import { fireEvent, render,screen } from "@testing-library/react"
import Body from'../Body'
import MOCK_DATA from '../mocks/RestaruntData.json'
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the Body Component with search button",async()=>{
    await act(async()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ))
    
    const searchinput = screen.getByRole("textbox")


    fireEvent.change(searchinput,{target:{value:"Restaurant"}})
    
    const cards=screen.getAllByTestId("resCard")
        console.log("length is" + cards.length)

   
})