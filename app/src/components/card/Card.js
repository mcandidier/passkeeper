import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { ItemMediaCard } from '../../components';

import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function CardItem({items}) {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {items.map(item => {
          return <Grid item xs={12} md={3} key={item.id}>
            <ItemMediaCard  item={item}/>
          </Grid>
        })
        }
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { items } = state;
  console.log(items)
  return {items};
}

export default connect(mapStateToProps, {
})(CardItem);