import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/HomeRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import GradeIcon from '@material-ui/icons/Grade'
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6888 30%, #FF8E53 90%)"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

const  ButtonAppBar = props => {
    const { history } = props;
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static"  color="transparent">
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TEST-DASHBOARD
          </Typography>
          <Button color="primary"><Home/></Button>
          <Button color="primary"><AccountCircle/></Button>
          <Button color="primary"><NotificationsIcon /></Button>
          <Button color="primary"><SettingsIcon /></Button>
          <Button color="primary"><GradeIcon /></Button>
        </Toolbar>

        <div>
      <button style={{backgroundColor:'green'}}> weekly - Test<button onClick={() => history.push('/Button')}
        style={{backgroundColor:'red'}}>Get Test</button></button>
      <br/> <br/>

      <button style={{backgroundColor:'green'}}>Qriocty  Merit - Test<button  onClick={() =>  history.push('/TestButton')} style={{backgroundColor:'red'}}>Get Test</button></button>
    </div>
 </AppBar>
</div>
     
    </div>
  );
}
export default withRouter(ButtonAppBar)