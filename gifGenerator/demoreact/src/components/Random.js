import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {
    
    const[gif,fetchData,isLoading] = useGif();

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='flex flex-col items-center bg-green-400 w-[600px] mt-28 rounded-lg border-black gap-y-5 border'>
        <h1 className='text-2xl font-bold underline uppercase mt-4'>A RANDOM GIF</h1>
        {
            (isLoading)?(<Spinner/>):(
                <img src={gif}  />
            )
        }
        <button className='bg-yellow-50 w-[80%] rounded-md font-bold  py-1 text-xl mb-6' onClick={()=>fetchData()}>Generate</button>
    </div>
  )
}

export default Random