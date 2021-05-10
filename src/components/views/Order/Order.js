import React from 'react';
import styles from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = (props) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    <p>The order&apos;s id is: {'id' in props.match.params ? props.match.params.id : 'The new order'}</p>
    
  </div>
);

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;