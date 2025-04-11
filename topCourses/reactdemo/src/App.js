import './App.css';
import { filterData,apiUrl } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards'
import Card from './components/Card'
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner'


function App() {

  const[courses,setCourses] = useState(null);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("something went wrong")
    }
    setLoading(false);
  }


 useEffect(() => {
   fetchData();
 }, [])
 

  return (
    <div className='App'>
      <div>
      <Navbar/>
      </div>

      <div>
      <Filter
      filterData={filterData}
      category={category}
      setCategory={setCategory}
      />
      </div>
      
      <div>
        {(loading)?(<Spinner/>):(<Cards courses={courses}
        category={category}/>)}
      </div>
      
    </div>  
  );
}

export default App;
