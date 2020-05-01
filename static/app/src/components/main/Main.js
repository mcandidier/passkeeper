import React, {useState} from 'react';
import {Button, makeStyles } from '@material-ui/core';

import { CardItem, CardForm } from '../../components';
import { Divider } from '@material-ui/core';
import clsx from 'clsx';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}));


export default function Main({open}) {
    const classes = useStyles();
    const [isOpen, setisOpen] = useState(false)

      const handleClickOpen = () => {
          setisOpen(true)
      }
      const handleClickClose = () => {
          setisOpen(false)
      }

    return (
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>Add</Button>
        <Divider />
        
        <CardItem />
        <CardItem />
        <CardItem />
      
        <CardForm isOpen={isOpen} action={handleClickClose}/> 

      </main>
    )
}