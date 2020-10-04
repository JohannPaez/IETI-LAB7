import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TodoApp from './TodoApp';
import CloseIcon from '@material-ui/icons/Close';
import App from '../App';
import EmailIcon from '@material-ui/icons/Email';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import PeopleIcon from '@material-ui/icons/People';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const drawerWidth = 300;

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
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
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

function AlertDialog(props) {
  const classes = useStyles();

  return (
    <div>      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete your account?
              This process cannot be canceled.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleClose()} color="primary" variant="contained">
            Cancel
          </Button>
          
          <Button onClick={() => props.handleClose(), () => props.deleteAccount()}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function SidebarPage() {  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setOpen(false);   
  }

  const deleteAccount = () => {
    const userAdd = {name: "", email: localStorage.getItem("email"), password: ""};
    fetch("https://serene-earth-78588.herokuapp.com/users", 
          {method: "DELETE",
             body: JSON.stringify(userAdd),
             mode: "cors",
             headers: {
                "Content-Type": "application/json"
              }
            })
            .then(response => response.text())
            .then(data => {                
              localStorage.removeItem("username");
              localStorage.removeItem("email");
              localStorage.removeItem("isLoggedIn");
              setOpen2(false);
              alert("Deleted successfully!");
            })
            .catch(e => {
                console.log("Error");
                console.log(e);
                alert("An error occurred while trying to delete the account.");
            });

  }

  if (!localStorage.getItem('isLoggedIn'))  {
    return (
      <App />
    );
  }
  
  return (

    <div className={classes.root} onLoad = {localStorage.removeItem("redi")}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
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
            Inf User - Add Cards
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color = "primary"/> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>      
            <ListItem button key={"username"}>
              <ListItemIcon>{<AccountBoxIcon color = "primary"/>}</ListItemIcon>
              <ListItemText primary={localStorage.getItem("username")} />
            </ListItem>
        </List>

        <List>      
            <ListItem button key={"email"}>
              <ListItemIcon>{<EmailIcon color = "primary"/>}</ListItemIcon>
              <ListItemText primary={localStorage.getItem("email")} />
            </ListItem>
        </List>
        
        <Divider />
        
        <List>      
          <Link to = "/profile" style = {{textDecoration: 'none', color: 'black'}}>
            <ListItem button key={"update"}>                        
                <ListItemIcon>              
                  {<SystemUpdateAltIcon color = "primary"/>}
                </ListItemIcon>
                <ListItemText primary = "Update Profile" />
                
            </ListItem>
            </Link>
        </List>
        <List>      
          <Link to = "/user" style = {{textDecoration: 'none', color: 'black'}}>
            <ListItem button key={"users"}>                        
                <ListItemIcon>              
                  {<PeopleIcon color = "primary"/>}
                </ListItemIcon>
                <ListItemText primary = "User List" />
                
            </ListItem>
            </Link>
        </List> 
        <Divider />
        <List>
          {['Delete Account'].map((text, index) => (
            <ListItem button key={text} onClick = {handleClickOpen2}>
              <ListItemIcon>{<DeleteIcon color = "secondary"/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>   
        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem button key={text} onClick = {logout}>
              <ListItemIcon>{<CloseIcon color = "primary"/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        <div style={{width:'100%', height:'100hv', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <TodoApp/>
        </div>

        <AlertDialog open ={open2} handleClickOpen = {handleClickOpen2} handleClose = {handleClose2}
            deleteAccount= {deleteAccount}/>
      </main>
    </div>
  );
}
