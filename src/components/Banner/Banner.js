import React from 'react';
import VisuallyHidden from '../VisuallyHidden';

function Banner({ type, attempts, answer, restartGame }) {
    let bannerMsg = null;
    if (type === 'happy') {
        bannerMsg = (
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{` ${attempts}`} guesses</strong>.
            </p>
        );
    } else if (type === 'sad') {
        bannerMsg = (
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        );
    }

    return (
        <div className={`${type} banner`}>
            {bannerMsg}
            <VisuallyHidden>{bannerMsg}</VisuallyHidden>
            <button className="reset-button" onClick={restartGame}>
                Restart Game
            </button>
        </div>
    );
}

export default Banner;
