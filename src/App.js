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
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2B4C6F',
      },
      // secondary: {main: '#11cb5f' },
    },
  });
  // W BrowserRouter można dać propsa basename={'/panel'} i to zastąpi
  // kombinację z PUBLIC_URL i homepage w package.json
  
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
       
      </StylesProvider>
      

    </BrowserRouter>
    
  );
  
  // return ( <div>Hi from app.js</div>);
  /*
  return (
    <BrowserRouter basename='/panel'>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`/`} component={Homepage} />
              <Route exact path={`/kitchen`} component={Kitchen} />
              <Route exact path={`/tables`} component={Tables} />
              <Route exact path={`/tables/booking/new`} component={Booking} />
              <Route exact path={`/tables/booking/:id`} component={Booking} />
              <Route exact path={`/tables/events/new`} component={Events} />
              <Route exact path={`/login`} component={Login} />          
              <Route exact path={`/tables/events/:id`} component={Events} />
              <Route exact path={`/waiter`} component={Waiter} />
              <Route exact path={`/waiter/order/new`} component={Order} />
              <Route exact path={`/waiter/order/:id`} component={Order} />
            </Switch>
          
          </MainLayout>    
        </ThemeProvider>
       
      </StylesProvider>
      

    </BrowserRouter>
    
  );
  */
}

export default App;
