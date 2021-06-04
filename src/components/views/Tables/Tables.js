import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`/tables/booking/new`}>New booking</Link>
    <Link to={`/tables/booking/someId`}>Booking of someId</Link>
    <Link to={`/tables/events/new`}>New event</Link>
    <Link to={`/tables/events/someId`}>Event of someId</Link>
  </div>
);

export default Tables;