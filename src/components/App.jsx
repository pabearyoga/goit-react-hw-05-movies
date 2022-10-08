import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cats/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesSearch = lazy(() => import('./MovieSearch/MovieSearch'));

const App = () => {

  return (
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} >
              <Route index element={<MoviesSearch />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />}/>
                <Route path="reviews" element={<Reviews />}/>
              </Route>
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
  )
}

export default App