import React from 'react';
import clsx from 'clsx';


import { Toolbar, IconButton, Divider, AppBar, Typography, Avatar, Popper, Fade} from '@material-ui/core';



// import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';


import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    user: {
        position: "absolute",
        bottom: theme.spacing(0),
        right: theme.spacing(3),
    },
    iconRoot: {
        color: 'white'
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    menuRoot: {
        width: "240px",
        backgroundColor: theme.palette.background.paper,
    },

}));

const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
}

export default function Nav({open, handleDrawerOpen}) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const active = Boolean(anchorEl);
    const id = active ? 'transitions-popper' : undefined;

    return (
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        <IconButton aria-label="user" className={classes.user} classes={{ root: classes.iconRoot }} aria-describedby={id} onClick={handleClick}> 
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </IconButton>

                        <Popper id={id} open={active} anchorEl={anchorEl} transition placement="bottom-end">
                        {({ TransitionProps}) => (
                            <Fade {...TransitionProps} timeout={150}>

                            <div className={classes.menuRoot}>
                                <List component="nav" aria-label="main mailbox folders">
                                <ListItem button>
                                    <ListItemIcon>
                                    <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                    <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItem>
                                </List>
                                <Divider />
                                <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem button>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                                <ListItemLink href="#simple-list">
                                    <ListItemText primary="Spam" />
                                </ListItemLink>
                                </List>
                            </div>


                            </Fade>
                        )}
                        </Popper>

                    </Typography>
                </Toolbar>
                
            </AppBar>
    )
}

