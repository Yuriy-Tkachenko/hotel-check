import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../../router/route';
import { AuthContext } from '../../context/index';
import Loader from '../ui/Loader/Loader';

const AppRoute = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route => 
          <Route 
            element={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route 
          path='*'
          element={<Navigate to='/order' replace />}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => 
          <Route 
            element={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />  
        )}
        <Route
          path='*'
          element={<Navigate to='/login' replace />}
        />
      </Routes>
  )
}

export default AppRoute
