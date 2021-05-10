import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Homepage from '../src/components/views/Homepage/Homepage';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';
import Order from '../src/components/views/Order/Order';
import Booking from '../src/components/views/Booking/Booking';
import Events from '../src/components/views/Events/Events';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />          
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={Events} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Events} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={Order} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
        </Switch>
      
      </MainLayout>    

    </BrowserRouter>
    
  );
}

export default App;
