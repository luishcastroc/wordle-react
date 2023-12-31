import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';
import { checkGuess } from '../../game-helpers';

function Game() {
    //setting the state for the guesses and results
    const [guesses, setGuesses] = React.useState([]);
    const [results, setResults] = React.useState([]);
    const [gameResult, setGameResult] = React.useState('');
    const [answer, setAnswer] = React.useState(sample(WORDS));

    console.info({ answer });

    function handleSubmit(guess) {
        if (!guess) {
            return;
        }
        const nextGuesses = [...guesses, guess];
        const nextResults = [...results, checkGuess(guess, answer)];

        setGuesses(nextGuesses);

        if (nextResults.length > 0) {
            const lastGuess = nextResults[nextResults.length - 1];
            if (lastGuess.every(cell => cell.status === 'correct')) {
                setGameResult('happy');
            } else if (nextResults.length === 6) {
                setGameResult('sad');
            }
        }
        setResults(nextResults);
    }

    function restartGame() {
        setGuesses([]);
        setResults([]);
        setGameResult('');
        setAnswer(sample(WORDS));
    }

    return (
        <>
            <GuessResults results={results} />
            <GuessInput handleSubmit={handleSubmit} finishedGame={gameResult ? true : false} />
            {gameResult && (
                <Banner type={gameResult} attempts={guesses.length} answer={answer} restartGame={restartGame} />
            )}
        </>
    );
}

export default Game;
