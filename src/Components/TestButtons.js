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
import {Card, Grid } from '@material-ui/core';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "(45deg, #FE6888 30%, #FF8E53 90%)"
  },
  menuButton: {
    marginRight: theme.spacing(100),
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
        <Toolbar color="#f50057">
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <Typography variant="h6" className={classes.title}>
          <MenuIcon/>
            Qriocty-Box 
          </Typography>
           
          </IconButton>
         
          
          <Button color="primary"><Home/></Button>
          <Button color="primary"><AccountCircle/></Button>
           <Button color="primary"><NotificationsIcon /></Button>
          <Button color="primary"><SettingsIcon /></Button>
          <Button color="primary"><GradeIcon /></Button> 
        </Toolbar>
        </AppBar>
        <div>
      


               <div>
               <Grid  container spacing={3} xs={12}>
                  <Grid item xs={6} sm={5}>
                 <button style={{backgroundColor:'#FF5733',width:"350px", marginLeft:'500px',height:"200px", borderRadius:"40px"}}>Stream - Mech<br/>Date-10/10/2020 <button onClick={() => history.push('/TestInfo')} style={{backgroundColor:'#808000'}}><br/>Take-Test</button></button><br/>
                <button style={{backgroundColor:'#FF5733',width:"350px", marginLeft:'500px',height:"200px", borderRadius:"40px"}}>Stream - Civil<br/>Date-7/10/2020 <button onClick={() =>  history.push('/TestInfo')} style={{backgroundColor:'#808000'}}><br/>Take-Test</button></button><br/>
                </Grid>
                </Grid>
     </div>

              <Grid item xs={6} sm={5}>
               <button onClick={() => history.push('/AppBar')} style={{backgroundColor:'#0000FF' }}>BACK</button>
                <button onClick={() => history.push('/QBank')} style={{backgroundColor:'orange'}}>NEXT</button> 

            {/* </ui> */}

       </Grid>      
    </div>

     
      </div>
      
    </div>
  );
}
export default withRouter(ButtonAppBar)