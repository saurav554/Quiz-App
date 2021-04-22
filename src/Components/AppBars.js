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

import {withRouter} from 'react-router-dom'
import { Card,Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "(45deg, #FE6888 30%, #FF8E53 90%)"
  },
  menuButton: {
    marginRight: theme.spacing(120),
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
    <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
           <Typography variant="h6" className={classes.title}>
           
            <IconButton  edge="end" className={classes.menuButton}color="inherit"><MenuIcon/> Qriocty box</IconButton>
          </Typography> 
            <IconButton color="inherit"><NotificationsIcon/></IconButton>
            <IconButton color="inherit"><AccountCircle/></IconButton> 
            <IconButton color="inherit"><SettingsIcon/></IconButton> 
        </Toolbar>
      </AppBar> 
      <br/>
        
       <div>
       <Grid  xs={12}>
       <Grid item xs={6} sm={5}>
      <Card style={{backgroundColor:'white',width:"350px", marginLeft:'500px',height:"200px", borderRadius:"40px"}}> weekly - Test<button onClick={() => history.push('/Button')}
        style={{backgroundColor:'grey'}}>Get Test</button></Card>
        </Grid>
        <br/>
       <Grid item xs={6} sm={5}>
      <Card style={{backgroundColor:'white',width:"350px",marginLeft:"500px",height:"200px", borderRadius:"40px"}}> Merit - Test<button  onClick={() =>  history.push('/TestButton')}
       style={{backgroundColor:'grey'}}>Get Test</button></Card>
       </Grid>
       </Grid>
   </div>
 
</div>
     
  );
}

export default withRouter(ButtonAppBar)