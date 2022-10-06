import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails"
import Cast from "./Cats/Cast";
import Reviews from "./Reviews/Reviews"
import NotFound from "./NotFound/NotFound";
import  {SharedLayout}  from "./SharedLayout/SharedLayout";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App