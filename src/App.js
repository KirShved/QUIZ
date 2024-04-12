import './index.scss';
import React, {useState} from 'react';


const questions = [
  {
    title: '2+2?',
    variants: ['3', '4', '5'],
    correct: 1,
  },
  {
    title: '2-2?',
    variants: ['3', '0', '5'],
    correct: 1,
  },
  {
    title: '2*2?',
    variants: [
      '4',
      '3',
      '2',
    ],
    correct: 0,
  },
  {
    title: '2/2?',
    variants: [
      '1',
      '0',
      'Пойду уточню...',
    ],
    correct: 0,
  },
  {
    title: 'Ты молодец?',
    variants: [
      'Да',
      'Нет',
      'Скоро узнаем',
    ],
    correct: 2,
  },
];

function Result({step,correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='./'>
      <button >Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step,question,onClickVariant}) {

  const percentage=Math.round((step/questions.length)*100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
      {question.variants.map((item,index) => (<li onClick={()=>onClickVariant(index)} key={item}>{item}</li>))}
      </ul>
    </>
  );
}

function App() {

  const[step,setStep]=useState(0)
  let [correct,setCorrect]=useState(0)

  let question=questions[step]

  function onClickVariant(index){
    setStep(step+1)

    if(question.correct===index){
      setCorrect(correct+1)
    }
  }

  return (
    <div className="App">
      {step!==questions.length 
      ? 
      <Game step={step} question={question} onClickVariant={onClickVariant} /> 
      : 
      <Result correct={correct} /> }
    </div>
  );
}

export default App;
