// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import {withRouter} from 'react-router-dom'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//     background: "linear-gradient(45deg, #FE6888 30%, #FF8E53 90%)"
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
  
// }));

// const  ButtonAppBar = props => {
//     const { history } = props;
//   const classes = useStyles();

//   return (
//     <div>
//     <div className={classes.root}>
//       <AppBar position="static"  color="transparent">
      
//       {
//                         quizData.map((question) => (
//                             <div className="answersdiv" key={question.id}>
//                                 <h1>
//                                     {
//                                         question.id + 1
//                                     }.
//                                     {
//                                         question.question
//                                     }
//                                 </h1>
//                                 <h3>
//                                     Your Answer : {myAnswers[question.id]}
//                                 </h3>
//                                 <h3>
//                                     Currect Answer : {question.answer}
//                                 </h3>
//                             </div>
//                         ))
//                     }
                    
//                 <div className="listOfNumbers" ref={refers}>
//                     {
//                         quizData.map((question) => (
//                             myAnswers[question.id] === question.answer ?
//                                 < button key={question.id + 1} style={{ backgroundColor: "green", color: "white" }} className="button">{question.id + 1}</button>
//                                 : < button key={question.id + 1} style={{ backgroundColor: "red", color: "white" }} className="button">{question.id + 1}</button>
//                         ))
//                     }
//                 </div>

//  </AppBar>
// </div>
     
//     </div>
//   );
// }
// export default withRouter(ButtonAppBar)