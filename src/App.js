import {useState , useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';



// 1a462cb9


const API_URL ="https://www.omdbapi.com?apikey=1a462cb9";




const App = () => {

const[movies ,setMovies] = useState([]);
const[search, setSearch ]= useState("");


const searchmovie = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
  console.log(data.Search);
}



  useEffect(() => {
    searchmovie('conjuring');
 
  }, [])


    return(

      // title, search icon
  <div className = "app">
         <h1>MOVIELAND</h1> 




       <div className = "search">
         <input
           placeholder="Search for movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

         <img
           src={SearchIcon}
           alt = "search"
           onClick={() => searchmovie(search)}
         /> 
       </div>





       {movies?.length > 0 ? (  
           <div className ="container">
           {movies.map((movie) => (
          <MovieCard movie ={movie} />
           ))}
            </div>
        ) : (
          <div className='empty'>
            <h2>No Movie Found</h2>
            </div>
        )}


 

  </div>
    );
};


export default App;