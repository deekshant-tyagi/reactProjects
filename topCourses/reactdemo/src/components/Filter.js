import React from 'react'

const Filter = ({filterData,category,setCategory}) => {
  function filterHandler(title){
    setCategory(title);
  }
  return (
    <div>
        {filterData.map((data)=>{
            return(
                <button key={data.id} onClick={()=>filterHandler(data.title)}>
                    {data.title}
                </button>
            )
        })};
    </div>
  )
}

export default Filter