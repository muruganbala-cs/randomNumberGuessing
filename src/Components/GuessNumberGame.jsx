import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


function GuessNumberGame() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  ); // Generates a random number between 1 and 100
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    if (guess === "") {
      setMessage("Please enter a guess!"); // Show error message if input is empty
      return;
    }

    const guessedNumber = parseInt(guess);
    setAttempts(attempts + 1);

    if (guessedNumber < randomNumber) {
      setMessage("Too low! Try again.");
    } else if (guessedNumber > randomNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage(
        `Congratulations! You guessed the correct number in ${
          attempts + 1
        } attempts.`
      );
    }
  };

  const handleReset = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="col">
    <div className="container ">
      <h1 className="tittle">Guess the Random Number Game</h1>
      <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        required
        autoFocus
        autoComplete="off"
      />
      <Button className="button mt-4" onClick={handleGuess} size="lg">
        Submit Guess
      </Button>

      <p className="mt-3 message ">{message}</p>

      <Button className="btn btn-danger" onClick={handleReset} size="ms">
        Reset Game
      </Button>
    </div>
    </div>
  );
}

export default GuessNumberGame;
