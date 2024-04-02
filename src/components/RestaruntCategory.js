import React from 'react'
import ItemList from './ItemList';

function RestaruntCategory({cato,showItems,setShowIndex,shutIndex}) {
    function handleClick(){
      setShowIndex();
    }    
    function handleDoubleClick(){
      shutIndex();
    }
    return (
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className='flex justify-between cursor-pointer' onClick={handleClick} onDoubleClick={handleDoubleClick}>
         <h2 className='text-lg font-semibold'>{cato.title}  ({cato.
itemCards.length})</h2>
         <span>▼</span>

         </div>
      {showItems && <ItemList item={cato.itemCards}/> }
    </div>
    </div>
  )
}

export default RestaruntCategory