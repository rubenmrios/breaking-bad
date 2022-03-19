import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home,Users,UserDetail,Navigate} from '../pages';

const Router: FC = () => (
    <>
    <Navigate/>
  <Routes>
    <Route  path="/"  element={<Home/>} />
     <Route  path="/users"  element={<Users/>} />
   <Route  path="/user/:id" element={<UserDetail/>} />
  </Routes>
    </>
);

export default Router;