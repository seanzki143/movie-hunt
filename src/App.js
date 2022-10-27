import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard/MovieCard';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

// 5911bb3
const API_KEY = ' http://www.omdbapi.com/?i=tt3896198&apikey=5911bb3';

function App() {

  const [ movies, setMovies] = useState([]);
  const [ search, setSearch] = useState('');

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(() => {
    SearchMovies('2022');
  }, []);

  function triggerSearch(data) {
    SearchMovies(data);
  }

  return (
    <>
    <div className="App pt-5">
      <Navbar setSearch={setSearch} search={search} triggerSearch={triggerSearch} />
      <div className='container py-5'>
        <div className='row'>
        {
          movies?.length > 0 ? (
            movies.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))
          ) : (
            <h3>No movies found...</h3>
          )
        }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
