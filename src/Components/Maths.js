import React, { useState } from 'react';
import {withRouter} from 'react-router-dom'

const QBank= props => {
	const { history } = props;

	// onsubmit=(e)=>{
    //  console.log(e.target.value)
	// }

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
				{ answerText: 'Anaue', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '9', isCorrect: false },
			],
		},

		{
			questionText:  "How many squares are there on a chess board?",
			answerOptions: [
				{ answerText: '128', isCorrect: false },
				{ answerText: '64', isCorrect: false },
				{ answerText: '32', isCorrect: false },
				{ answerText: '256', isCorrect: true },
				{ answerText: '765', isCorrect: false },
			],
		},	

		{
			questionText: "Who invented the electric light bulb?",
			answerOptions: [
				{ answerText: 'Tom Cruise', isCorrect: false },
				{ answerText: 'Barak Obama', isCorrect: false },
				{ answerText: 'Wole Soyinka', isCorrect: false },
				{ answerText: 'Thomas Edison', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},	

		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	  
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'shop', isCorrect: true },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: "What did the crocodile swallow in Peter Pan?",
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: false },
				{ answerText: 'shoe', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		props.history.push('/QBank')
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section='>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					
					</div>

									

				</>
			)}
		</div>
	);
}
  export default withRouter(QBank)