import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom';
import SidebarPage from './SidebarPage';
import '../degradados.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [values2, setValues2] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [formulario, setFormulario] = React.useState({
    fullName: '',
    email: '',
    passwd: '',
    passwdConfirm: ''
  });

  const handleChangeForm = (prop) => (event) => {
    setFormulario({ ...formulario, [prop]: event.target.value});    
  }

  const [noError, setError] = React.useState({
    flag: true
  });
    
  
  const verifyNoError = () => {
    var flagError;
    if (formulario.passwd === formulario.passwdConfirm) {
      flagError = true;
    } else {
      flagError = false;
    }
    setError({ ...noError, flag: flagError});   
  };

  
 
  const registerUser = (event) => {
    event.preventDefault();
    verifyNoError();
    console.log(formulario);
    if (formulario.passwd !== formulario.passwdConfirm || (formulario.passwd === "" || formulario.passwdConfirm === "")) {
      alert("Passwords do not match or are empty, please try again!");
      return;
    }    
    var userAdd = {name: formulario.fullName, email: formulario.email, password: formulario.passwd};

    fetch("https://serene-earth-78588.herokuapp.com/users", 
          {method: "POST",
             body: JSON.stringify(userAdd),
             mode: "cors",
             headers: {
                "Content-Type": "application/json"
              }
            })
            .then(response => response.text())
            .then(data => {                
              localStorage.setItem("username", formulario.fullName);
              localStorage.setItem("email", formulario.email);                
              localStorage.setItem('isLoggedIn', true);
              handleClickShowPassword();              
            })
            .catch(e => {
                console.log("Error");
                console.log(e);
                alert("An error has occurred!");
            });    
  }
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword: !values2.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  if (localStorage.getItem('isLoggedIn'))  {
    return (
      <SidebarPage />
    );
  }

  return (
    <div className={classes.root, "register"} style = {{width:'100%', height:'100hv', backgroundImage: 'linear-gradient(135deg, #08185B, #949CBC)', display:'flex'}}>
        <React.Fragment>
                <CssBaseline />
                <main className="layout">                    
                    <Paper className="paper">                                                
                        <Typography variant="h2">Sign Up</Typography>
                        <Avatar className="avatar">
                            <AccountBoxIcon />
                        </Avatar>
                        <form className="form" onSubmit = {registerUser}>                            
                            <FormControl className={classes.root} noValidate autoComplete="off">
                                <TextField required onChange={handleChangeForm("fullName")} id="idFullName" label="Full Name" variant="outlined"/>
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} noValidate autoComplete="off">
                                <TextField type ="email" required onChange={handleChangeForm("email")} id="idEmail" label="Email" variant="outlined" />
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} variant="outlined">
                                <InputLabel error = {noError.flag ? false: true} id = "idPasswd" htmlFor="outlined-adornment-password" >Password</InputLabel>
                                <OutlinedInput required
                                error = {noError.flag ? false: true}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}                                
                                onChange={handleChange('password'), handleChangeForm("passwd")}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} variant="outlined">
                                <InputLabel error = {noError.flag ? false: true} id = "idPasswdConfirm" htmlFor="outlined-adornment-password" >Confirm password</InputLabel>
                                <OutlinedInput required
                                error = {noError.flag ? false: true}
                                id="outlined-adornment-password"
                                type={values2.showPassword ? 'text' : 'password'}                                
                                onChange={handleChange2('password'), handleChangeForm("passwdConfirm")}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword2}
                                        edge="end"
                                    >
                                        {values2.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={130}
                                />
                            </FormControl>
                            <br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"                                
                            >
                                REGISTER
                            </Button>
                            <br></br>
                            <br></br>
                            <Link to ="/"> Sign In</Link>
                        </form>
                    </Paper>
                </main>  
            </React.Fragment>                  
    </div>
  );
}
