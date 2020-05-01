import React, {useEffect} from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {Sidebar, Nav, Main} from './components';
import { getItems } from './redux/actions';

import { useSelector, useDispatch } from 'react-redux';

const styles = makeStyles(()=> ({
  root: {
    display: 'flex',
  }
}));

function App() {
  
  const classes = styles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  //todo: set open as global state.
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
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
