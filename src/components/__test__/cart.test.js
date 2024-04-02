import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import MOCK_DATA from "../mocks/RestaruntItems.json"
import Header from "../Header"

const data=jest.fn(()=>Promise.resolve(
        {
            json:Promise.resolve(MOCK_DATA)
        }    ))

it("should able to add items to the cart",async()=>{
    await act(async()=>render(
    
    <Provider>
        <Header/>
        <RestroMenu/>
        </Provider>
        ))

})