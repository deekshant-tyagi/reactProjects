import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    
        const[isLoading,setIsLoading] = useState(false);
        
        const[gif,setGif] = useState('');
        
        async function fetchData(tag) {
            setIsLoading(true);
            try {
                const response = await axios.get((tag)?(`${apiUrl}&tag=${tag}`):(apiUrl));
                setIsLoading(false);
                setGif(response.data.data.images.downsized_medium.url);
            } catch (error) {
                console.error("Error fetching gif:", error.response ? error.response.data : error.message);
            }
        }
    
        useEffect(() => {
            fetchData(tag);
        }, []);

        return [gif, fetchData, isLoading];

    
    }
    
export default useGif