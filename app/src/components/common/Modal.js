import React, { useState } from 'react';
import { 
  Box,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  CircularProgress
} from '@material-ui/core/';

import { useForm  } from 'react-hook-form';  
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: '50vh',
    maxHeight: '50vh'
  }
}));

const Modal = ({open, component }) => {
  const classes = useStyles();
  const [ loading, setLoading ] = useState(false);
//   /const { register, handleSubmit, errors, reset } = useForm();
  
//   const [open, setOpen] = useState(false);

  const handleClose = (e) => {
    //   action();
    //   setLoading(false);
  };

  const Component = component;

  return (
    <div>
      <Dialog classes={{paper: classes.dialogPaper} } disableBackdropClick={true}
      open={open} onClose={handleClose} onExit={handleClose}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Title
          </DialogContentText>
            {component}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default connect(
  null,
)(Modal);