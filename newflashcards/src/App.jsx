import './App.css';
import { useState } from 'react';

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState([
    {
      amendment: 'Amendment 1',
      text: 'Freedom of Religion, Speech, and the Press',
      image: 'data:image/jpeg;base64,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',
      difficulty: 'easy'
  },
  {
    amendment: 'Amendment 2',
    text: 'Right to Bear Arms',
    difficulty: 'medium'
  },
  {
    amendment: 'Amendment 3',
    text: 'Quartering of Soldiers',
    difficulty: 'hard'
  },
  {
    amendment: 'Amendment 4',
    text: 'Search and Seizure',
    difficulty: 'easy'
  },
  {
    amendment: 'Amendment 5',
    text: 'Rights of Persons',
    difficulty: 'medium'
  },
  {
    amendment: 'Amendment 6',
    text: 'Right to a Fair Trial',
    difficulty: 'hard'
  },
  {
    amendment: 'Amendment 7',
    text: 'Trial by Jury in Civil Cases',
    difficulty: 'easy'
  },
  {
    amendment: 'Amendment 8',
    text: 'Limits on Bail and Punishments',
    difficulty: 'medium'
  },
  {
    amendment: 'Amendment 9',
    text: 'Rights Retained by the People',
    difficulty: 'hard'
  },
  {
    amendment: 'Amendment 10',
    text: 'Powers Retained by the States and the People',
    difficulty: 'easy'
  }
]);

  const [card, setCard] = useState(cards[0]);
  const [shuffled, setShuffled] = useState(false);
  const [correct_guess, setCorrectGuess] = useState('');
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    let i = cards.indexOf(card);
    if(!shuffled) {
      if(i === cards.length - 1) {
        i = -1;
      }
      setCard(cards[++i]);
    } else {
      i = Math.floor(Math.random() * cards.length);
      setCard(cards[i]);
    }
    setIsFlipped(false);
    setCorrectGuess('');

  };

  const prevCard = () => {
    let i = cards.indexOf(card);
    if(i === 0) {
      i = cards.length;
    }
    setCard(cards[--i]);
    setIsFlipped(false);
    setCorrectGuess('');
  }

  const setShuffle = () => {
    setShuffled(!shuffled)
  };

  const handleChange = (event) => {
    setCorrectGuess(event.target.value)
  }

  const onCheckAnswer = () => {
    if (correct_guess.includes(card.text) && !isFlipped){
      setCorrectGuess('correct');
      setStreak(streak + 1);
      if (streak >= longestStreak){
        setLongestStreak(streak + 1);
      }
    }
    else {
      setCorrectGuess("wrong");
      setStreak(0);
    }
  }

  return (
    <>
      <div className="App">
        <h2>The Bill of Rights</h2>
        <h4>How well do you know the first ten amendements? Test your knowledge here!</h4>
        <h5>Number of Cards: {cards.length}</h5>
        <h5>Current Streak: {streak}, Longest Streak: {longestStreak}</h5>
        <br></br>

        <div className={`card ${isFlipped ? 'flipped' : ''}`} id={card.difficulty} onClick={flip}>
          <div className="front">
            <h3>{card.amendment}</h3>
            {card.image ? <img src={card.image} alt={card.amendment} /> : ''}
          </div>
          <div className="back">
            <h3>{card.text}</h3>
          </div>
        </div>
        <div className="guessing">
          Guess the answer here:
          <input type="text" class = {correct_guess} onChange={handleChange} name="answer" placeholder="Place your answer here..."/>
          <button type="submit" class="submit-button" onClick = {onCheckAnswer}>Submit Guess</button>
        </div>
       <br />
        <div>
          <button type="back" onClick={prevCard} className = "previousCard">⭠</button>
          <button type="next" onClick={nextCard} className = "nextCard">⭢</button>      
          <button type="shuffle" onClick = {setShuffle} class="shuffle-button">Shuffle Cards</button>
        </div>
      
      </div>
    </>
  )
}

export default App;