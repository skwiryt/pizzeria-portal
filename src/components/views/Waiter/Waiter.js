import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.array,
    fetchTables: PropTypes.func,
    setTableStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }
  handleStatusChange = (status, tableId) => {
    const { setTableStatus } = this.props;
    setTableStatus({id: tableId, status});

  }
  renderActions(status, tableId, order){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.handleStatusChange('thinking', tableId)}>thinking</Button>
            <Button onClick={() => this.handleStatusChange('ordered', tableId)}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.handleStatusChange('ordered', tableId)}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.handleStatusChange('prepared', tableId)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.handleStatusChange('delivered', tableId)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.handleStatusChange('paid', tableId)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.handleStatusChange('free', tableId)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if((active || !tables.length) && !error) {    
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`/waiter/order/${row.order}`}  component={Link}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id, row.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;