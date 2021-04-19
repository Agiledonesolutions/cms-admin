import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Coupons from '../components/Coupons/Coupons';
import Dashboard from '../components/Dashboard/Dashboard';
import Home from '../components/Dashboard/Home';
import FlashSales from '../components/FlashSales/FlashSales';
import Login from '../components/Login/Login';
import ResetPassword from '../components/Login/ResetPassword';
import Attributes from '../components/Product/Attributes/Attributes';
import CreateAttribute from '../components/Product/Attributes/CreateAttribute';
import AttributeSets from '../components/Product/AttributeSets/AttributeSets';
import CreateAttributeSet from '../components/Product/AttributeSets/CreateAttributeSet';
import Brands from '../components/Product/Brands/Brands';
import CreateBrand from '../components/Product/Brands/CreateBrand';
import Catalog from '../components/Product/Catalog';
import CreateProduct from '../components/Product/CreateProduct';
import Options from '../components/Product/Options/Options';
import Reviews from '../components/Product/Reviews/Reviews';
import CreateTag from '../components/Product/Tags/CreateTag';
import Tags from '../components/Product/Tags/Tags';
import CreateUser from '../components/User/CreateUser';
import CreateRole from '../components/User/Roles/CreateRole';
import Roles from '../components/User/Roles/Roles';
import Users from '../components/User/Users';
import { getToken } from '../utils/session';
import PrivateRoute from './privateroutes';

import PublicRoute from './publicroutes';


const routes = (
  <Router>
    <React.Fragment>
      <Switch>
        <PublicRoute exact path='/'  component={Login} />
        <PublicRoute exact path='/reset-password' component={ResetPassword} />
        <PrivateRoute exact path='/dashboard' component={()=><Dashboard abc={ <Home />} />} />
        <PrivateRoute exact path='/products' component={()=><Dashboard abc={ <Catalog />} />} />
        <PrivateRoute exact path='/products/create' component={()=><Dashboard abc={ <CreateProduct />} />} />
        <PrivateRoute exact path='/users' component={()=><Dashboard abc={<Users />} />} />
        <PrivateRoute exact path='/users/create' component={()=><Dashboard abc={<CreateUser />} />} />
        {/* <PrivateRoute exact path='/users/:id/edit' component={()=><Dashboard abc={<CreateUser edit="true"/>} />} /> */}
        <PrivateRoute exact path='/roles' component={()=><Dashboard abc={<Roles />} />} />
        <PrivateRoute exact path='/roles/create' component={()=><Dashboard abc={<CreateRole />} />} />
        <PrivateRoute exact path='/roles/:id/edit' component={()=><Dashboard abc={<CreateRole edit="true"/>} />} />
        <PrivateRoute exact path='/brands' component={()=><Dashboard abc={ <Brands />} />} />
        <PrivateRoute exact path='/brands/create' component={()=><Dashboard abc={ <CreateBrand />} />} />
        <PrivateRoute exact path='/reviews' component={()=><Dashboard abc={ <Reviews />} />} />
        <PrivateRoute exact path='/tags' component={()=><Dashboard abc={ <Tags />} />} />
        <PrivateRoute exact path='/tags/create' component={()=><Dashboard abc={ <CreateTag />} />} />
        <PrivateRoute exact path='/tags/:id/edit' component={()=><Dashboard abc={ <CreateTag edit="true"/>} />} />
        <PrivateRoute exact path='/attribute-sets' component={()=><Dashboard abc={ <AttributeSets />} />} />
        <PrivateRoute exact path='/attribute-sets/create' component={()=><Dashboard abc={ <CreateAttributeSet />} />} />
        <PrivateRoute exact path='/attribute-sets/:id/edit' component={()=><Dashboard abc={ <CreateAttributeSet edit="true"/>} />} />
        <PrivateRoute exact path='/attributes' component={()=><Dashboard abc={ <Attributes />} />} />
        <PrivateRoute exact path='/attributes/create' component={()=><Dashboard abc={ <CreateAttribute />} />} />
        <PrivateRoute exact path='/options' component={()=><Dashboard abc={ <Options />} />} />


        <PrivateRoute exact path='/flashsales' component={()=><Dashboard abc={ <FlashSales />} />} />
        <PrivateRoute exact path='/coupons' component={()=><Dashboard abc={ <Coupons />} />} />

      </Switch>
    </React.Fragment>
  </Router>
);
export default routes;
