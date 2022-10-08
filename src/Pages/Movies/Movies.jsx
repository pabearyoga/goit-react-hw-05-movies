import { Outlet } from "react-router-dom";
import { Suspense } from 'react';

const Movies = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
        </div>
        )
 }

 export default Movies