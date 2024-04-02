
import {CDN_URL} from '../util/constants';

const RestroCard=(props)=>{
    const {resData}=props;
    console.log(resData)
    const{
        cloudinaryImageId,
        name,
        avgRating,
        sla,
        cuisines,
        costForTwo
    }=resData.info;
    
    return(
        <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg">
            <img src={CDN_URL+cloudinaryImageId} alt="hotel" className="h-[150px] w-[200px] rounded-lg" />
            <h3 className='text-xl font-semibold py-4'>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{cuisines.join(" - ")}</h4>
            <h4>{costForTwo}</h4>
            </div>
    )
}

export default RestroCard;