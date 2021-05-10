import React from 'react';
import styles from './Events.module.scss';
import PropTypes from 'prop-types';

const Events = (props) => (
  <div className={styles.component}>
    <h2>Events view</h2>
    <p>The event&apos;s id is: {'id' in props.match.params ? props.match.params.id : 'The new event'}</p>
  </div>
);

Events.propTypes = {
  match: PropTypes.object,
};
export default Events;