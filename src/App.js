import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Header from './pages/Header'
import Home from './pages/Home'
import Celebirity from './pages/Celebirity'
import TV from './pages/TV'
import NotFound from './pages/NotFound'
import Movie from './Components/Movie'
import { movies } from './movieDummy'
import MovieDetail from './pages/DetailPage/MovieDetail'
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
          <Route path="/Movie" element=
            {
              <div className="app-container">
                {
                  movies.returns.map((item) => {
                    return(
                      <Movie
                      poster_path={item.poster_path}
                      title={item.title}
                      vote_average={item.vote_average}
                      overview={item.overview}
                      key={item.id}
                      />
                    )
                  })
                }
              </div>
            }>
          </Route>
          <Route to="/celebirity" element={<Celebirity />}>
          </Route>

          <Route to="/tv" element={<TV />}>
          </Route>

          <Route path={
            '/movie/:title'
          }
          element = {
          <MovieDetail>
          </MovieDetail>
          }>
          </Route>

          <Route path="/*" element={
          <NotFound>
          </NotFound>
          }>
          </Route>
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
