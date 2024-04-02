import {   useState } from "react";
import { LOGO_URL } from "../util/constants"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import { useSelector } from "react-redux";





const Header=()=>{

    const [btnName,setBtnName]=useState("Login");
    
    const onlineStatus=useOnlineStatus();
    
    const status = onlineStatus==true ? "online 🟢" : "offline 🔴"

    const cartItems=useSelector((store)=>store.cart.items)
   
    console.log(cartItems)
  

    return(
        <div className="header flex justify-between shadow-md bg-pink-300 sm:bg-orange-400 lg:bg-green-200">
            <div className='logo-container w-56'>
                <img className="logo" src={LOGO_URL} alt="LOGO" />
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 gap-6 font-semibold text-xl">
                    <li>{status}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li className="fonr-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="login-btn" onClick={()=>{
                        setBtnName(btnName==="Login"?"Logout":"Login")}}>{btnName}</button>
             
                    
                </ul>
            </div>

        </div>
    )
}
export default Header;
