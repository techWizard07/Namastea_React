import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import useRestaruntMenu from '../util/useRestaruntMenu';
import RestaruntCategory from './RestaruntCategory';
function RestroMenu() {
    
    const {resId}=useParams();
    const resInfo=useRestaruntMenu(resId);
    const [showIndex,setShowIndex]=useState(null)
    function shutIndex(){
      setShowIndex(null)
    }
    if(resInfo===null) return(<Shimmer/>)


    const catogry=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card?.["@type"]=== 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const  {name,city,sla,avgRatingString,cuisines}=resInfo?.cards[2]?.card?.card?.info;
  return  (
    <div>
        <div className="text-center">
           <h1 className='text-2xl font-bold my-6 '>{name}</h1>
           <h2 className='text-xl font-semibold'>{city}</h2> 
           <h2 className='text-xl font-semibold'>Delivery Time : {sla?.slaString}</h2>
           <h2 className='text-xl font-semibold'>Rating : {avgRatingString}</h2>
           <h2 className='text-xl font-semibold'>cuisines : {cuisines.join(", ")}</h2>
            
            {catogry.map((category,index)=>
            <RestaruntCategory key={category.card.card.title} cato={category.card.card}
            showItems={index===showIndex}
            setShowIndex={()=>setShowIndex(index)}
            shutIndex={()=>shutIndex()}
            />)}
            
        </div> 
    </div>
  )
}

export default RestroMenu