import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Contexts/AuthContext';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(UserContext);
  const location = useLocation();
  if(loading){
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-700"></div>
      </div>
    );
  }
  
  if(user && user?.uid){
    return children;
  }else{
    return <Navigate to='/login' state={{from: location}} replace />
  }
};

export default PrivateRoute;