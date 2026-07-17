// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Widget 4: Student Scores Logic ---
    const scoreListEl = document.getElementById('score-list');
    const scoreSummaryEl = document.getElementById('score-summary');
    const newScoreInput = document.getElementById('new-score-input');
    const addScoreBtn = document.getElementById('add-score-btn');

    // Default data
    let scores = [45, 82, 91, 60, 77, 33];

    const getScoreColor = (score) => {
        if (score >= 90) return 'green';
        if (score >= 50) return 'darkgoldenrod';
        return 'red';
    };

    const renderScores = () => {
        scoreListEl.innerHTML = ''; // Clear current list
        scores.forEach(score => {
            const scoreEl = document.createElement('div');
            scoreEl.textContent = score;
            scoreEl.style.color = getScoreColor(score);
            scoreEl.classList.add('fw-bold');
            scoreListEl.appendChild(scoreEl);
        });
    };

    const updateSummary = () => {
        if (scores.length === 0) {
            scoreSummaryEl.textContent = 'No scores yet.';
            return;
        }
        const highest = Math.max(...scores);
        const lowest = Math.min(...scores);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

        scoreSummaryEl.textContent = `Highest: ${highest} | Lowest: ${lowest} | Average: ${average.toFixed(1)}`;
    };

    const addScore = () => {
        const newScore = parseInt(newScoreInput.value, 10);

        // Validation
        if (isNaN(newScore) || newScore < 0 || newScore > 100) {
            alert("Please enter a score between 0 and 100");
            newScoreInput.value = ''; // Clear invalid input
            return;
        }

        scores.push(newScore);
        renderScores();
        updateSummary();

        newScoreInput.value = ''; // Clear input after adding
        newScoreInput.focus(); // Set focus back to the input
    };

    if (scoreListEl && scoreSummaryEl && newScoreInput && addScoreBtn) {
        // Initial render on page load
        renderScores();
        updateSummary();

        // Event Listeners
        addScoreBtn.addEventListener('click', addScore);
        newScoreInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                addScore();
            }
        });
    }

});