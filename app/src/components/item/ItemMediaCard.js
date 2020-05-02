import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import img from '../../img/contemplative-reptile.jpg';

import { ApiRemoveItem } from '../../redux/actions';

import { connect } from 'react-redux';


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 80,
  },
});


const  ItemMediaCard = ({item, ApiRemoveItem}) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  }
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom  variant="body2" component="span">
            {item.name}
          </Typography>
          { show ?
          <Typography variant="body2" color="textSecondary" component="p">
            {item.password}
          </Typography>
          :
          ''
          }
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => toggleShow()}>
          {show? 'Hide': 'Show'} password
        </Button>
        <Button size="small" color="secondary" onClick={() => ApiRemoveItem(item.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, {
  ApiRemoveItem
})(ItemMediaCard);