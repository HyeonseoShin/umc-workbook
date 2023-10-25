import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Components from 'C:/Users/user/Document/umc-workbook/src/Components';
import Home from './pages/Home';
import Celebirity from './pages/Celebirity';
import TV from './pages/TV';
import NotFound from './pages/NotFound';
import Movie from './Components/Movie';
import {movies} from './movieDummy';

function App() {
  return (
    <div className="root-wrap">
      {' '}
      <BrowserRouter>
        {' '}
        //A{' '}
        <Routes>
          {' '}
          //B <Route path="./Desktop/umc-workbook" element={Components} />{' '}
        </Routes>{' '}
      </BrowserRouter>{' '}
    </div>
  )
}

export default App

/*import { movies } from "./movieDummy";
import Movie from "./Components/Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
      {
        movies.results.map((item) =>
        {
          return(
            <Movie
              poster_path={item.poster_path}
              title={item.title}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;*/
