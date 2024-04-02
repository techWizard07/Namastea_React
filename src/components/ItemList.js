import { useDispatch, useSelector } from 'react-redux';
import {CDN_URL} from '../util/constants'
import { addItem } from '../util/cartSlice';


const ItemList = ({item})=>{
    const dispatch =useDispatch();
    
    const handleAddButton=(item)=>{
        dispatch(addItem(item))
        // cosole.log(item)
    }
    // const{name,price,imageId,description}=item.card.info
    return(
        <div>
           {item.map(item=>
             <div data-testid="foodItem" key={item.card.info.id} className="flex justify-between p-2 m-2  border-grey-200 border-b-2 text-left">
                <div className="p-2 ">
                <span className="font-semibold">{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price/100}</span>
                <p className="text-xs max-w-[300px] my-4">{item.card.info.description}</p>
                </div>
                <div className='h-[150px] w-[200px]  overflow-hidden rounded-md shadow-lg'>
                    <button className='p-2 shadow-lg absolute rounded-lg bg-black text-white' onClick={()=>handleAddButton(item)}> Add +</button>
                    <img src={CDN_URL+item.card.info.imageId} alt="" />
               </div>
           </div>)}
        </div>
    );
}
export default ItemList;
