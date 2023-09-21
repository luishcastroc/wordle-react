import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ results }) {
    const rowsRange = range(NUM_OF_GUESSES_ALLOWED);
    const cellsRange = range(5);

    function getCellClass(row, cell) {
        if (!results[row] || !results[row][cell] || results.length === 0) {
            return 'cell';
        }
        switch (results[row][cell].status) {
            case 'correct':
                return 'cell correct';
            case 'misplaced':
                return 'cell misplaced';
            case 'incorrect':
                return 'cell incorrect';
            default:
                return 'cell';
        }
    }

    function getCellLetter(row, cell) {
        if (!results[row] || !results[row][cell] || results.length === 0) {
            return '';
        }
        return results[row][cell].letter;
    }

    return (
        <div className="guess-results">
            {rowsRange.map((_, i) => (
                <p className="guess" key={i}>
                    {cellsRange.map((_, j) => (
                        <span className={getCellClass(i, j)} key={j}>
                            {getCellLetter(i, j)}
                        </span>
                    ))}
                </p>
            ))}
        </div>
    );
}

export default GuessResults;
