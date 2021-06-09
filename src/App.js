import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Homepage from '../src/components/views/Homepage/Homepage';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import Order from '../src/components/views/Order/Order';
import Booking from '../src/components/views/Booking/Booking';
import Events from '../src/components/views/Events/Events';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2B4C6F',
      },
      // secondary: {main: '#11cb5f' },
    },
  });
  
  // Ten props: basename działa dla wszystkich elementów BrowserRoutera w aplikacji
  // również dla Linków gdzieś w komponentach.
  // zmienna PUBLIC_URL zwraca "homePage" z package.json (bez '/'), czyli url, pod którym
  // są wszyskie katalogi umieszczone przez Webpacka w build.
  return (
    <Provider store={store}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
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
    </Provider>
  );
  
}

export default App;
