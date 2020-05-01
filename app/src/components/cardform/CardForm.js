import React from 'react';
import { Box, Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core/';

import { useForm  } from 'react-hook-form';  
import { AddItem } from '../../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: '50vh',
    maxHeight: '50vh'
  }
}));


const CardForm = ({ isOpen, action, AddItem }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors, reset } = useForm();
  
  const onSubmit = (data, e ) => {
    e.preventDefault();
    AddItem(data, handleClose);
  };

  const handleClose = (e) => {
      action();
      reset()
  };

  return (
    <div>
      <Dialog classes={{paper: classes.dialogPaper} } disableBackdropClick={true}
      open={isOpen} onClose={handleClose} onExit={handleClose}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              name="name"
              inputRef={register({ required: true })}
              helperText={errors.name ? 'This field is required': ''}
            />
            <TextField
              margin="dense"
              label="Website Url"
              type="url"
              fullWidth
              name="url"
              inputRef={register({
                required: true
              })}
              helperText={errors.url ? 'This field is required': '' }
            />
            <TextField
              margin="dense"
              label="password"
              type="text"
              fullWidth
              name="password"
              inputRef={register({ required: true })}
              helperText={errors.password ? 'This field is required': ''}
              />
            <Box  display="flex" component="div" flexDirection="row-reverse">
                <Box justifyContent="flex-end" component="div">
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>

                    <Button color="primary" type="submit">
                        Subscribe
                    </Button>
                </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default connect(
  null, {
    AddItem
  }
)(CardForm);