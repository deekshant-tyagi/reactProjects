import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
    const[tag,setTag] = useState('car');
    
    const[gif,fetchData,isLoading] = useGif(tag);
    

    useEffect(() => {
        fetchData(tag);
    }, []);
    

  return (
    <div className='flex flex-col items-center bg-blue-400 w-[600px] mt-28 rounded-lg border-black gap-y-5 border'>
        <h1 className='text-2xl font-bold underline uppercase mt-4'>RANDOM {tag} GIF</h1>
        {
            (isLoading)?(<Spinner/>):(
                <img src={gif}  />
            )
        }
        <input
        type='text'
        value={tag}
        placeholder='Enter gif name...'
        className='bg-yellow-50 w-[80%] rounded-md font-bold  py-1 text-xl'
        onChange={(event)=>setTag(event.target.value)}
        />
        <button className='bg-yellow-50 w-[80%] rounded-md font-bold  py-1 text-xl mb-6' onClick={()=>fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag