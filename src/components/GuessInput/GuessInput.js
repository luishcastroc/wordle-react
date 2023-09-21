import React from 'react';

function GuessInput({ handleSubmit, finishedGame }) {
    const [guess, setGuess] = React.useState('');
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={event => {
                event.preventDefault();
                if (guess.length < 5) {
                    window.alert('The word must be 5 letters long 😮‍💨');
                    return;
                }
                handleSubmit(guess);
                setGuess('');
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required={true}
                minLength={5}
                maxLength={5}
                id="guess-input"
                type="text"
                value={guess}
                disabled={finishedGame}
                onChange={event => {
                    const nextGuess = event.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                    setGuess(nextGuess);
                }}
            />
        </form>
    );
}

export default GuessInput;
