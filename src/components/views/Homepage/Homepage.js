import React from 'react';
import styles from './Homepage.module.scss';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const demoTodaysOrders = [
  {id: '123', table: 3, status: 'ordered', products: [
    {
      'id': 'pizza',
      'amount': 1,
      'price': 22,
      'priceSingle': 22,
      'name': 'Nonna Alba\'s Pizza',
      'params': {
        'sauce': {
          'label': 'Sauce',
          'options': {
            'tomato': 'Tomato',
          },
        },
        'toppings': {
          'label': 'Toppings',
          'options': {
            'olives': 'Olives',
            'redPeppers': 'Red peppers',
            'greenPeppers': 'Green peppers',
            'mushrooms': 'Mushrooms',
            'basil': 'Fresh basil',
          },
        },
        'crust': {
          'label': 'pizza crust',
          'options': {
            'thin': 'thin',
          },
        },
      },
    },
  ]},
  {id: '234', table: 4, status: 'ordered', products: [
    {
      'id': 'cake',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zio Stefano\'s Doughnut',
      'params': {},
    },
    {
      'id': 'breakfast',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zia Giulia\'s Breakfast',
      'params': {
        'coffee': {
          'label': 'Coffee type',
          'options': {
            'cappuccino': 'Cappuccino',
          },
        },
      },
    },
  ]},
  {id: '345', table: 5, status: 'ordered', products: [
    {
      'id': 'cake',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zio Stefano\'s Doughnut',
      'params': {},
    },
  ]},
  {id: '456', table: 6, status: 'ordered', products: [
    {
      'id': 'breakfast',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zia Giulia\'s Breakfast',
      'params': {
        'coffee': {
          'label': 'Coffee type',
          'options': {
            'cappuccino': 'Cappuccino',
          },
        },
      },
    },
  ]},
  {id: '111', table: 6, status: 'payed', products: [
    {
      'id': 'breakfast',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zia Giulia\'s Breakfast',
      'params': {
        'coffee': {
          'label': 'Coffee type',
          'options': {
            'cappuccino': 'Cappuccino',
          },
        },
      },
    },
  ]},
  {id: '222', table: 6, status: 'payed', products: [
    {
      'id': 'breakfast',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zia Giulia\'s Breakfast',
      'params': {
        'coffee': {
          'label': 'Coffee type',
          'options': {
            'cappuccino': 'Cappuccino',
          },
        },
      },
    },
  ]},
];
const demoTodaysBookings = [
  {
    'date': '2021-06-08',
    'hour': '19:30',
    'table': 1,
    'duration': 1,
    'ppl': 1,
    'starters': [],
    'phone': '605324263',
    'address': 'Słoneczna, 12',
    'id': 1,
  },
];
const demoTodaysEvents = [
  {
    'id': 4,
    'date': '2021-02-01',
    'hour': '13:00',
    'table': 2,
    'repeat': 'daily',
    'duration': 4,
    'ppl': 3,
    'starters': [],
  },
  {
    'id': 5,
    'date': '2021-02-01',
    'hour': '18:00',
    'table': 2,
    'repeat': 'daily',
    'duration': 2,
    'ppl': 3,
    'starters': [
      'lemonWater',
    ],
  },
];
const nbOfStatus = (status) => demoTodaysOrders.filter(order => order.status === status).length;

const Homepage = () => (
  <div className={styles.component}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <Typography variant='h5'>Nb of today&#39;s orders by actual status</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Payed</TableCell>
                <TableCell>Ordered</TableCell>
                <TableCell>Prepared</TableCell>
                <TableCell>Cancelled</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>              
              <TableRow>
                <TableCell>{nbOfStatus('payed')}</TableCell>
                <TableCell>{nbOfStatus('ordered')}</TableCell>
                <TableCell>{nbOfStatus('prepared')}</TableCell>
                <TableCell>{nbOfStatus('cancelled')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={styles.paper}>
          <Typography variant='h5'>Today&#39;s bookings</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Table</TableCell>
                <TableCell>Hour</TableCell>
                <TableCell>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoTodaysBookings.map((booking) =>(
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.table}</TableCell>
                  <TableCell>{booking.hour}</TableCell>
                  <TableCell>{booking.duration}</TableCell>
                </TableRow>
              ))}              
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={styles.paper}>
          <Typography  variant='h5'>Today&#39;s events</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Table</TableCell>
                <TableCell>Hour</TableCell>
                <TableCell>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoTodaysEvents.map((event) =>(
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.table}</TableCell>
                  <TableCell>{event.hour}</TableCell>
                  <TableCell>{event.duration}</TableCell>
                </TableRow>
              ))}              
            </TableBody>
          </Table>
        </Paper>
      </Grid>      
    </Grid>
   
  </div>
);

export default Homepage;