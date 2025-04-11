import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import { useContext,useEffect } from 'react';
function App() {
  const{fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, [])
  
  return (
    <div className="App">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
