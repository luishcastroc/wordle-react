import React from 'react';

function GuessInput({ handleSubmit, finishedGame }) {
    const [guess, setGuess] = React.useState('');
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={event => {
                event.preventDefault();
                handleSubmit(guess);
                setGuess('');
            }}
        >
            <label forhtml="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                disabled={finishedGame}
                onChange={event => setGuess(event.target.value.toUpperCase())}
            />
        </form>
    );
}

export default GuessInput;
