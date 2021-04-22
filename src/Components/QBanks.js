import React, { Fragment, useRef, useState } from 'react';
import quizData from './quizDatas';
import CountDown from 'react-countdown-clock';
import { Card } from '@material-ui/core';

let myAnswers = {};


const Quiz = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [temp, settemp] = useState(0);
    const [selectedAnswer, setselectedAnswer] = useState(null);
    const { question, answer, options, explanation } = quizData[currentQuestion]
    const [totalMarks, setTotalMarks] = useState(5);
    const [isAnswerd, setisAnswerd] = useState("none")
    const [optionclass, setoptionclass] = useState("options");
    const refs = useRef(currentQuestion);
    const refers = useRef(currentQuestion);


    const prevQuestion = (e) => {
        if (currentQuestion > 0)
            setCurrentQuestion(currentQuestion - 1)
        setselectedAnswer("");
        setoptionclass("options")
    }
    const NextQuestion = (e) => {
      if (currentQuestion > 0)
          setCurrentQuestion(currentQuestion + 1)
      setselectedAnswer("");
      setoptionclass("options")
  }

    const confirmAnswer = (e) => {
        if (selectedAnswer === answer) {
            setTotalMarks(totalMarks + 1)
        }
        if (currentQuestion < quizData.length - 1)
            setCurrentQuestion(currentQuestion + 1)
      
        refs.current.childNodes[currentQuestion].style.backgroundColor = "green";
      

        myAnswers[currentQuestion] = selectedAnswer;
        console.log(myAnswers);

        settemp(currentQuestion + 1)
        setselectedAnswer("")
        setisAnswerd("none")
        setoptionclass("options")

    }

    const setMyAnswer = (option) => {
        if (option.length > 0) {
            setisAnswerd("inline")
            setselectedAnswer(option)
            setoptionclass("selected")
        } else {
            setisAnswerd(false)
            setselectedAnswer(null)
            setoptionclass("options")
        }
    }

    if (quizData.length > temp) {
        return (
            <Fragment>
                <div className="questionsdiv">
                    <h1>
                        {
                            question
                        }</h1>
                    <h3 className="selectedAnswer">
                        Your Ans:- {
                            selectedAnswer
                        }
                    </h3>

                   
                    <p>
                        {
                            (currentQuestion + 1) + " out of " + quizData.length
                        }
                    </p>
                    <div>
                        {
                            options.map((option, i) => (
                                <p key={i} className={optionclass} name={"options"} onClick={(e) => setMyAnswer(option)}>
                                    {option}
                                </p>
                            ))
                        }
                    </div>

                    <div className="btns">
                        <button className="prevQuestionBtn" onClick={(e) => prevQuestion(e)} >{"<- Prev"}</button>
                        <button className="confirmAnswer" style={{ display: isAnswerd }} onClick={(e) => confirmAnswer(e)} >{"Confirm"}</button>
                        <button className="NextQuestionBtn" onClick={(e) => NextQuestion(e)} >{"Next->"}</button>
                        <button className="NextQuestionBtn" onClick={(e) => NextQuestion(e)} >{"Review"}</button>

                    </div>
                </div>
                <div style={{paddingLeft:"400px"}}>
         
                      <CountDown 
                          seconds={1800}
                          color="yellow"
                          alpha={0.4}
                          size={75}	/>
               </div>

                <div className="listOfNumbers" ref={refs}>
                    {
                        quizData.map((question) => (
                            (question.id) < 9 ?
                                < button key={question.id + 1} onClick={(e) => setCurrentQuestion(question.id)} className="button">0{question.id + 1}</button>
                                : < button key={question.id + 1} onClick={(e) => setCurrentQuestion(question.id)} className="button">{question.id + 1}</button>
                        ))
                    }
                    
                </div>
            </Fragment>
        )
    } else {
        console.log("myA", myAnswers);
        return (
            <Fragment>
                <div className="questionsdiv">
                <ul>
             <li>
               <b>Thankyou for  Test</b>
             </li>
           </ul>
           <ul>
             <li>
               Your Score {totalMarks} out of {quizData.length}
             </li>
           </ul>
           <ul>
             <li>
               Correct: {totalMarks} & Incorrect: {quizData.length - totalMarks}
             </li>
           </ul>
           <ul>
             <li>Percentile: {(totalMarks / 20) * 100}</li>
             <br/>
            
           
          
                    {/* {
                        quizData.map((question) => (
                            <div className="answersdiv" key={question.id}>
                                <h1>
                                        {question.id + 1} {question.question}
                                    
                                </h1>
                                <h3>
                                    Your Answer : {myAnswers[question.id]}
                                </h3>
                                <h3>
                                    Currect Answer : {question.answer}
                                </h3>
                            </div>
                        ))
                    }  */}
                   
                     <div className="result" />
                         <div>{question} </div>
                         <div>{answer}</div>
                         <div>{explanation}</div>
                       
                         </ul>
                    
                    </div> 

                <div className="listOfNumbers" ref={refers}>
                    {
                        quizData.map((question) => (
                            myAnswers[question.id] === question.answer ?
                                < button key={question.id + 1} onClick={(e) => setCurrentQuestion(question.id)}style={{ backgroundColor: "green", color: "white" }} className="button">{question.id + 1}</button>
                                : < button key={question.id + 1} onClick={(e) => setCurrentQuestion(question.id)} style={{ backgroundColor: "red", color: "white" }} className="button">{question.id + 1}</button>
                        ))
                    }
                </div>
            
            </Fragment>
        )
    }
}

export default Quiz;