import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';

const Booking = (props) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    <p>The booking&apos;s id is: {'id' in props.match.params ? props.match.params.id : 'The new booking'}</p>
  </div>
);


Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;