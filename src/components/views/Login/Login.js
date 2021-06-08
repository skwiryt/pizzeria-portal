import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const Login = () => (
  <div className={styles.component}>
    
    <form className={styles.root} noValidate autoComplete="off">
      <Grid container direction='column' alignItems='flex-end'>
        <Paper className={styles.paper}>
          <Grid container direction='column' alignItems='flex-end' spacing={4}>
            <Grid item><Typography variant='h5'>Log in to the panel</Typography></Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button>OK</Button>
              <Button>Cancell</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

    </form>
  </div>
);

export default Login;