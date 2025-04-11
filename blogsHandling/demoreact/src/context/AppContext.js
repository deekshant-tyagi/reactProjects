import { baseUrl } from "../baseUrl";
import { createContext,useState } from "react";



export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading] = useState(false)
    const[posts,setPosts] = useState([]);
    const[page,setPage] =  useState(1);
    const[totalPages,setTotalPages] = useState(null)

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await  fetch(url);
            const data  = await result.json();
            // console.log(data);
            setPosts(data.posts);
            setPage(data.page)
            setTotalPages(data.totalPages)
            
        } catch (error) {
            console.log("Error in fetching data.")
            setPosts([]);
            setPage(1)
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page)
        fetchBlogPosts(page)
    }

    const value = {
        loading,
        posts,
        page,
        totalPages,
        setLoading,
        setPosts,
        setPage,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts
    }

    return <AppContext.Provider  value={value}>
        {children}
    </AppContext.Provider>;


}