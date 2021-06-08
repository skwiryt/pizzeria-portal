import React from 'react';
import styles from './Tables.module.scss';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const demoIntervals = [
  {    
    hour: '12:00',
    table1: {type: 'booking', id: 'b123'},
    table2: {},
    table3: {},    
  },
  {    
    hour: '12:30',
    table1: {},
    table2: {},
    table3: {},    
  },
  {    
    hour: '13:00',
    table1: {},
    table2: {type: 'events', id: 'e123'},
    table3: {},    
  },
  {    
    hour: '13:30',
    table1: {},
    table2: {},
    table3: {},    
  },
];


class Tables extends React.Component { 
  state = {
    pickedDate: new Date().toISOString().slice(0, 10),
  }
  getIntervals = () => demoIntervals;

  handleDateChange = (pickedDate) => {
    this.setState(
      {
        ...this.state,
        pickedDate,
      }
    );
  }
  render = () => {
    const intervals = this.getIntervals();

    return (
      <div className={styles.component}>
        <Paper className={styles.paper}>
          <Grid container direction='row' justify='space-between'>
            <Grid item>
              <form className={styles.datepicker} noValidate>
                <TextField
                  onChange={(e) => this.handleDateChange(e.target.value)}
                  id="date"
                  label="Pick the date"
                  type="date"
                  defaultValue={this.state.pickedDate}
                  className={styles.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item>
              <Button component={Link} to='/tables/events/new'>New Event</Button>
              <Button component={Link} to='/tables/booking/new'>New Booking</Button>
            </Grid>
          </Grid>
          <Typography variant='h5'>Tables view on day: {this.state.pickedDate}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Table 1</TableCell>
                <TableCell>Table 2</TableCell>
                <TableCell>Table 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {intervals.map((interval) => (
                <TableRow key={interval.hour}>
                  <TableCell>{interval.hour}</TableCell>
                  <TableCell>
                    {
                      !interval.table1.type ? 
                        (<Button>free</Button>) : 
                        (<Button component={Link} to={`/tables/${interval.table1.type}/${interval.table1.id}`}>
                          {interval.table1.type || ''} {interval.table1.id || ''}
                        </Button>)
                    }                    
                  </TableCell>
                  <TableCell>
                    {
                      !interval.table2.type ? 
                        (<Button>free</Button>) : 
                        (<Button component={Link} to={`/tables/${interval.table2.type}/${interval.table2.id}`}>
                          {interval.table2.type || ''} {interval.table2.id || ''}
                        </Button>)
                    }                    
                  </TableCell>
                  <TableCell>
                    {
                      !interval.table3.type ? 
                        (<Button>free</Button>) : 
                        (<Button component={Link} to={`/tables/${interval.table3.type}/${interval.table3.id}`}>
                          {interval.table3.type || ''} {interval.table3.id || ''}
                        </Button>)
                    }                    
                  </TableCell>     
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
  

}

/*
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`/tables/booking/new`}>New booking</Link>
    <Link to={`/tables/booking/someId`}>Booking of someId</Link>
    <Link to={`/tables/events/new`}>New event</Link>
    <Link to={`/tables/events/someId`}>Event of someId</Link>
  </div>
);
*/
export default Tables;