import { render,screen } from "@testing-library/react"
import RestroCard from "../RestroCard"
import MOCK_DATA from '../mocks/RestaruntCard.json'
import '@testing-library/jest-dom'

it("should render restarunt card with props data",()=>{
    render(<RestroCard resData={MOCK_DATA}/>)

    const name=screen.getByText("Thaadiwala Town Restaurant")
    expect(name).toBeInTheDocument()

})