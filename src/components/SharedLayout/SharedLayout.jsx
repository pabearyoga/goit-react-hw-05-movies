import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css'

export const SharedLayout = () => {

    return (
      <>
        <header className={css.Header}>
          <nav className={css.Navigation}>
            <div className={css.NavigationWrapper}>
              <NavLink to="/" className={css.Home}>Home</NavLink>
              <NavLink to="/movies" className={({ isActive }) => (isActive ? `${css.active}` : `${css.NavigationLink}`)}>Movies</NavLink>
            </div>
          </nav>
        </header>

        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>

        </>
  );
};