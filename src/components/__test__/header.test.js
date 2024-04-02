const { render,screen, fireEvent } = require("@testing-library/react")
import { Provider } from 'react-redux'
import Header from '../Header'
import appStore from '../../util/appStore'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

it("should load header component with a login Button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
        </BrowserRouter>
    )

    // const loginButton=screen.getByRole("button")
    const loginButton=screen.getByText("Login")
    expect(loginButton).toBeInTheDocument()
})

it("should load header component with Cart",()=>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
        </BrowserRouter>
    )

   const cartItem=screen.getByText("Cart (0 items)")
    expect(cartItem).toBeInTheDocument()
})

it("should change logout to login in header component",()=>{
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
        </BrowserRouter>
    )

    const loginButton=screen.getByRole("button",{name:"Login"})

        fireEvent.click(loginButton)
        
        const logoutButton=screen.getByRole("button",{name:"Logout"})
        
        fireEvent.click(logoutButton)
        
        const secondloginbutton=screen.getByRole("button",{name:"Login"})

        expect(secondloginbutton).toBeInTheDocument()


    })

it("should change login to logout in header component",()=>{
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
        </BrowserRouter>
    )

    const loginButton=screen.getByRole("button",{name:"Login"})

        fireEvent.click(loginButton)
        
        const logoutButton=screen.getByRole("button",{name:"Logout"})
        
        expect(logoutButton).toBeInTheDocument()


    })