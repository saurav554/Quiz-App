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
import { Card } from '@material-ui/core';
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
          <MenuIcon />
            INSTRUCTION
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
        <ui>
                <li>The Test has a duration of  1 hr and ends as soon as your time elapses.</li><br/>
                <li>Each Test consists of 20 questions.</li><br/>
                <li> Every question contains 5 options.</li><br/>
                <li>The timer starts as soon as the Test loads.</li><br/>
                <li>Let's do this if you think you've got what it takes?</li><br/>
                <li>Do not bend, tear or  tag on the multiple-choice form. </li><br/>
                <li>Ensure that only machine recognizable marks are entered. </li><br/>
                <li>Let's do this if you think you've got what it takes</li><br/>
                <li>Let's do this if you think you've got what it takes</li><br/>
               <li>Let's do this if you think you've got what it takes</li><br/>
               <li>Ensure that only machine recognizable marks are entered. </li><br/>
               <li>The timer starts as soon as the Test loads.</li><br/>

                
               <li/><br/>


               {/* <div>
                <button style={{backgroundColor:'#FF5733'}}>English-Test<button onClick={() => history.push('/QBank')} style={{backgroundColor:'#808000'}}>Get Test</button></button><br/>
                <button style={{backgroundColor:'#FF5733'}}> Aptitude Test<button  onClick={() =>  history.push('/QBank')} style={{backgroundColor:'#808000'}}>Get Test</button></button><br/>
                <button style={{backgroundColor:'#FF5733'}}> Math Test<button  onClick={() =>  history.push('/QBank')} style={{backgroundColor:'#808000'}}>Get Test</button></button><br/>

    
     </div> */}


                <button onClick={() => history.push('/Button')} style={{backgroundColor:'#0000FF' }}>BACK</button>
                <button onClick={() => history.push('/QBank')} style={{backgroundColor:'#808000'}}>Begin-Test</button> 

            </ui>

             
    </div>

     
      </div>
      
    </div>
  );
}
export default withRouter(ButtonAppBar)