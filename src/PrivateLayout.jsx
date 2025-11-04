import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';


const PrivateLayout = () => {
    
const [isAuthenticated, setIsAuthenticated] = useState(false);

if(isAuthenticated === null){
    return <div>Loading..</div>
}

return(
    <>
        {isAuthenticated ? <Outlet/> : <Navigate to="/login" />}
    </>
)

}

export default PrivateLayout;
