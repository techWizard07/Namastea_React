import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import {RESTARUNT_URL} from "../util/constants"


const Body=()=>{
    const [restroData,setRestroData]=useState([]);
    const [filteredRestarunt,setFilteredRestarunt]=useState([])
    const[searchItem,setSearchItem]=useState("");
    const [topRated,setTopRated]=useState(null)
    
    const onlineStatus=useOnlineStatus();
    
    useEffect(()=>{
       fetchData();
    },[]);


    const fetchData= async()=>{
      const data=await fetch(RESTARUNT_URL);
      const jsonData=await data.json();
            setRestroData(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(onlineStatus==false){
      return <h1>Seems to be you're offline check you're internet Connection!!</h1>
    }
    return(
     <div className="body">
     <div className="flex items-center m-4 p-4 gap-5">
     <input type="text" className="border py-4 border-black h-14 w-[220px] rounded-md" placeholder="Search your restarunt" value={searchItem} onChange={(e)=>
      {
        setSearchItem(e.target.value)
        let filteredData=restroData.filter(res=>res.info.name.toLowerCase().includes(searchItem.toLowerCase()))
        setFilteredRestarunt(filteredData)
        }}/>
    
     <div className="filter">
      <button className=" bg-green-200 m-3 px-4 py-2 h-14 rounded-md text-lg font-medium"
      onClick={()=>{
        const filteredList = restroData.filter(
        (res) => res.info.avgRating > 4
      );

      setTopRated(filteredList);
      
    }
        }>
        Top - Rated Restarunts
      </button>
        </div>
     </div>
     <div className="flex flex-wrap"> 
     {
         searchItem.length==0 ? topRated==null ?
         restroData.map((res)=><Link key={res.info.id} to={`restarunt/${res.info.id}`}><RestroCard  resData={res}/></Link>) : 
         topRated.map((res)=><Link key={res.info.id} to={`restarunt/${res.info.id}`}><RestroCard  resData={res}/></Link>) : 
         filteredRestarunt.map((res)=><Link key={res.info.id} to={`restarunt/${res.info.id}`}><RestroCard  resData={res}/></Link>)
     }
     </div>
 </div>
    )
 }

 export default Body;