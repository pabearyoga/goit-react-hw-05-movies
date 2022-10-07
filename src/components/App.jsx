import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails"
import Cast from "./Cats/Cast";
import Reviews from "./Reviews/Reviews"
import { SharedLayout } from "./SharedLayout/SharedLayout";
import MoviesSearch from "./MovieSearch/MovieSearch";




const App = () => {
    const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;


  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        {/* <Route path={`/${ROUTE_HOME_PAGE}`} element={<SharedLayout />}> */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
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
    </>
  )
}

export default App

// import { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

// import {SharedLayout} from './SharedLayout/SharedLayout';

// import 'react-toastify/dist/ReactToastify.css';

// const Home = lazy(() => import('../Pages/Home/Home'));
// const Movies = lazy(() => import('../Pages/Movies/Movies'));
// // const MoviesSearch = lazy(() => import('./MoviesSearch'));
// const MoviesDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const MovieCast = lazy(() => import('./Cats/Cast'));
// const MovieReviews = lazy(() => import('./Reviews/Reviews'));

// export const App = () => {
  // const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <Routes>
        // <Route path={`/${ROUTE_HOME_PAGE}`} element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           {/* <Route path="home" element={<Home />} /> */}
//           <Route path="movies" element={<Movies />}>
//             {/* <Route index element={<MoviesSearch />} /> */}
//             <Route path=":movieId" element={<MoviesDetails />}>
//               <Route path="cast" element={<MovieCast />} />
//               <Route path="reviews" element={<MovieReviews />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<Home />} />
//         </Route>
//       </Routes>
//       <ToastContainer />
//     </Suspense>
//   );
// };