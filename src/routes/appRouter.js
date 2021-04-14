import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Home from '../components/Dashboard/Home';
import Login from '../components/Login/Login';
import ResetPassword from '../components/Login/ResetPassword';
import Catalog from '../components/Product/Catalog';
import CreateProduct from '../components/Product/CreateProduct';
import CreateUser from '../components/User/CreateUser';
import CreateRole from '../components/User/Roles/CreateRole';
import Roles from '../components/User/Roles/Roles';
import Users from '../components/User/Users';
import PrivateRoute from './privateroutes';

import PublicRoute from './publicroutes';


const routes = (
  <Router>
    <React.Fragment>
      <Switch>
        <PublicRoute exact path='/' component={Login} />
        <PublicRoute exact path='/reset-password' component={ResetPassword} />
        <PrivateRoute exact path='/dashboard' component={()=><Dashboard abc={ <Home />} />} />
        <PrivateRoute exact path='/products' component={()=><Dashboard abc={ <Catalog />} />} />
        <PrivateRoute exact path='/products/create' component={()=><Dashboard abc={ <CreateProduct />} />} />
        <PrivateRoute exact path='/users' component={()=><Dashboard abc={<Users />} />} />
        <PrivateRoute exact path='/users/create' component={()=><Dashboard abc={<CreateUser />} />} />
        <PrivateRoute exact path='/roles' component={()=><Dashboard abc={<Roles />} />} />
        <PrivateRoute exact path='/roles/create' component={()=><Dashboard abc={<CreateRole />} />} />



      </Switch>
    </React.Fragment>
  </Router>
);
export default routes;
