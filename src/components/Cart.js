import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import {removeAllItem} from '../util/cartSlice'

function Cart() {

const cartItems=useSelector((store)=>store.cart.items);
    
let total=0
    cartItems.map((item)=>(
        total+=item.card.info.price/100
    ))

    const dispatch=useDispatch()
    const handlClearCart=()=>{
        dispatch(removeAllItem())
    }
  return (
    <div className='text-center m-2 p-2'>
        <div className="text-2xl font-bold"> CART</div>
        {cartItems.length>0 && <button className='p-2 m-2 text-white bg-black rounded-lg' onClick={handlClearCart}>Clear Cart</button>}
           {cartItems.length>0 ?
           <div className="w-6/12 m-auto">
           <ItemList item={cartItems}/>
           <h2>Total Price is ={total}</h2>
           </div>:<h2 className='m-2 p-2 font-semibold text-xl'>Cart is empty!! you can Add Items TO cart!!</h2>}
    </div>
  )
}

export default Cart