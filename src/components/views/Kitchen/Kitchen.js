import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoPendingOrders = [
  {id: '123', table: 3, products: [
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
  {id: '234', table: 4, products: [
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
  {id: '345', table: 5, products: [
    {
      'id': 'cake',
      'amount': 1,
      'price': 9,
      'priceSingle': 9,
      'name': 'Zio Stefano\'s Doughnut',
      'params': {},
    },
  ]},
  {id: '456', table: 6, products: [
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

const Kitchen = () => ( 
  <Paper className={styles.component}>
    <Table>    
      {demoPendingOrders.map(order => (
        <TableBody key={order.id}>
          <TableRow class={styles.orderRow}>        
            <TableCell>Order Nb: {order.id}</TableCell>
            <TableCell>Table/remote: {order.table}</TableCell>
            <TableCell><Button>Mark Prepared</Button></TableCell>
          </TableRow>
          {order.products.map(product => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell>
                quantity:  {product.amount}
              </TableCell>
              <TableCell>
                {Object.keys(product.params).map(param => (
                  <TableRow key={param}>
                    <TableCell>
                      {product.params[param].label}
                    </TableCell>
                    <TableCell>
                      {Object.keys(product.params[param].options).map(option => (
                        <TableRow key={option}>{product.params[param].options[option]}</TableRow>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableCell>             
            </TableRow>
          ))}
        </TableBody>
      ))}
    </Table>
      
  </Paper>
);

export default Kitchen;

/*

{order.products.map(product => (
          <TableRow key={product.id}>
            <TableCell component="th" scope="row">
              {product.id}
            </TableCell>
            <TableCell>
              {product.amount}
            </TableCell>
            <TableCell>
              {Object.keys(product.params).map(param => (
                <TableRow key={param}>
                  <TableCell>
                    {product.params[param].label}
                  </TableCell>
                  <TableCell>
                    {Object.keys(product.params[param].options).map(option => (
                      product.params[param].options[option]
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableCell>             
          </TableRow>
        ))}
      ))}


      {order.products.map(product => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
            </TableRow>
          ))}

*/