import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import { Loader } from "components/Loader/Loader";

const Movies = () => {
    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </div>
        )
 }

 export default Movies