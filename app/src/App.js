import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {Sidebar, Nav, Main} from './components';

import './App.css';

const styles = makeStyles(()=> ({
  root: {
    display: 'flex',
  }
}));

function App() {
  const classes = styles();
  
  //todo: set open as global state.

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log('handle open')
    setOpen(true);
  };
  const handleDrawerClose = () => {
    console.log('handle close')
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <Nav open={open} handleDrawerOpen={handleDrawerOpen}/>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
        <Main open={open}/>
    </div>
  );
}

export default App;
