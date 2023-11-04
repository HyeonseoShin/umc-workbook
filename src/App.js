import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Header from './pages/Header'
import Home from './pages/Home'
import Celebirity from './pages/Celebirity'
import TV from './pages/TV'
import NotFound from './pages/NotFound'
import Movie from './Components/Movie'
import { movies } from './movieDummy'
import { isHtmlElement } from 'react-router-dom/dist/dom'

function App() {
  return (
    <div className="root-wrap">
      {' '}
      <BrowserRouter>
        {' '}
        //A{' '}
        <Routes>
          {' '}
          //B <Route path="./Desktop/umc-workbook" element={<Home />} />{' '}
          <Route>
            path="/Movie" element=
            {
              <Movie
                poster_path={isHtmlElement.poster_path}
                title={isHtmlElement.title}
                vote_average={isHtmlElement.vote_average}
                overview={isHtmlElement.overview}
                key={isHtmlElement.id}
              />
            }
          </Route>
          <Route>path="/celebirity" element={<Celebirity />}</Route>
          <Route>path="/tv" element={<TV />}</Route>
          <Route>path="*" element={<NotFound />}</Route>
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
