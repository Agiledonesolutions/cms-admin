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
import CreateProduct from '../components/Product/Products/CreateProduct';
import Options from '../components/Product/Options/Options';
import Reviews from '../components/Product/Reviews/Reviews';
import CreateTag from '../components/Product/Tags/CreateTag';
import Tags from '../components/Product/Tags/Tags';
import CreateUser from '../components/User/CreateUser';
import CreateRole from '../components/User/Roles/CreateRole';
import Roles from '../components/User/Roles/Roles';
import Users from '../components/User/Users';
import PrivateRoute from './privateroutes';
import PublicRoute from './publicroutes';
import Catalog from '../components/Product/Products/Catalog';
import CreateOption from '../components/Product/Options/CreateOption';
import CreateCoupon from '../components/Coupons/CreateCoupon';
import CreateReview from '../components/Product/Reviews/CreateReview';
import CreateFlashSale from '../components/FlashSales/CreateFlashSale';
import Taxes from '../components/Localization/Taxes/Taxes';
import CreateTax from '../components/Localization/Taxes/CreateTax';
import Media from '../components/Media/Media';
import Settings from '../components/Settings/Settings';
import Categories from '../components/Product/Categories/Categories';


const routes = (
  <Router>
    <React.Fragment>
      <Switch>
        <PublicRoute exact path='/'  component={Login} />
        <PublicRoute exact path='/reset-password' component={ResetPassword} />
        <PrivateRoute exact path='/dashboard' component={()=><Dashboard abc={ <Home />} />} />

        <PrivateRoute exact path='/users' component={()=><Dashboard abc={<Users />} />} />
        <PrivateRoute exact path='/users/create' component={()=><Dashboard abc={<CreateUser />} />} />
        {/* <PrivateRoute exact path='/users/:id/edit' component={()=><Dashboard abc={<CreateUser edit="true"/>} />} /> */}

        <PrivateRoute exact path='/roles' component={()=><Dashboard abc={<Roles />} />} />
        <PrivateRoute exact path='/roles/create' component={()=><Dashboard abc={<CreateRole />} />} />
        <PrivateRoute exact path='/roles/:id/edit' component={()=><Dashboard abc={<CreateRole edit="true"/>} />} />

        <PrivateRoute exact path='/products' component={()=><Dashboard abc={ <Catalog />} />} />
        <PrivateRoute exact path='/products/create' component={()=><Dashboard abc={ <CreateProduct />} />} />
        <PrivateRoute exact path='/products/:id/edit' component={()=><Dashboard abc={ <CreateProduct edit="true"/>} />} />

        <PrivateRoute exact path='/categories' component={()=><Dashboard abc={ <Categories />} />} />

        <PrivateRoute exact path='/brands' component={()=><Dashboard abc={ <Brands />} />} />
        <PrivateRoute exact path='/brands/create' component={()=><Dashboard abc={ <CreateBrand />} />} />
        <PrivateRoute exact path='/brands/:id/edit' component={()=><Dashboard abc={ <CreateBrand edit="true"/>} />} />

        <PrivateRoute exact path='/attribute-sets' component={()=><Dashboard abc={ <AttributeSets />} />} />
        <PrivateRoute exact path='/attribute-sets/create' component={()=><Dashboard abc={ <CreateAttributeSet />} />} />
        <PrivateRoute exact path='/attribute-sets/:id/edit' component={()=><Dashboard abc={ <CreateAttributeSet edit="true"/>} />} />

        <PrivateRoute exact path='/attributes' component={()=><Dashboard abc={ <Attributes />} />} />
        <PrivateRoute exact path='/attributes/create' component={()=><Dashboard abc={ <CreateAttribute />} />} />
        <PrivateRoute exact path='/attributes/:id/edit' component={()=><Dashboard abc={ <CreateAttribute edit="true"/>} />} />
        
        <PrivateRoute exact path='/options' component={()=><Dashboard abc={ <Options />} />} />
        <PrivateRoute exact path='/options/create' component={()=><Dashboard abc={ <CreateOption />} />} />
        <PrivateRoute exact path='/options/:id/edit' component={()=><Dashboard abc={ <CreateOption edit="true"/>} />} />
        
        <PrivateRoute exact path='/tags' component={()=><Dashboard abc={ <Tags />} />} />
        <PrivateRoute exact path='/tags/create' component={()=><Dashboard abc={ <CreateTag />} />} />
        <PrivateRoute exact path='/tags/:id/edit' component={()=><Dashboard abc={ <CreateTag edit="true"/>} />} />

        <PrivateRoute exact path='/reviews' component={()=><Dashboard abc={ <Reviews />} />} />
        <PrivateRoute exact path='/reviews/:id/edit' component={()=><Dashboard abc={ <CreateReview edit="true"/>} />} />

        {/* Sales */}

        <PrivateRoute exact path='/flashsales' component={()=><Dashboard abc={ <FlashSales />} />} />
        <PrivateRoute exact path='/flashsales/create' component={()=><Dashboard abc={ <CreateFlashSale />} />} />
        <PrivateRoute exact path='/flashsales/:id/edit' component={()=><Dashboard abc={ <CreateFlashSale edit="true"/>} />} />

        <PrivateRoute exact path='/coupons' component={()=><Dashboard abc={ <Coupons />} />} />
        <PrivateRoute exact path='/coupons/create' component={()=><Dashboard abc={ <CreateCoupon />} />} />
        <PrivateRoute exact path='/coupons/:id/edit' component={()=><Dashboard abc={ <CreateCoupon edit="true"/>} />} />

        <PrivateRoute exact path='/media' component={()=><Dashboard abc={ <Media />} />} />

        <PrivateRoute exact path='/taxes' component={()=><Dashboard abc={ <Taxes />} />} />
        <PrivateRoute exact path='/taxes/create' component={()=><Dashboard abc={ <CreateTax />} />} />
        <PrivateRoute exact path='/taxes/:id/edit' component={()=><Dashboard abc={ <CreateTax edit="true"/>} />} />

        <PrivateRoute exact path='/settings' component={()=><Dashboard abc={ <Settings />} />} />


      </Switch>
    </React.Fragment>
  </Router>
);
export default routes;
