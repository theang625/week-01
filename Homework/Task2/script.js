// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Widget 3: Multiplication Table Logic ---
    const multiplierInput = document.getElementById('multiplier-input');
    const generateBtn = document.getElementById('generate-table-btn');
    const multiplicationTable = document.getElementById('multiplication-table');
    const tableBody = document.getElementById('table-body');

    if (generateBtn && multiplierInput && tableBody && multiplicationTable) {
        const generateTable = () => {
            const number = parseInt(multiplierInput.value, 10);

            // Clear previous results and hide table if input is invalid
            tableBody.innerHTML = '';
            if (isNaN(number)) {
                multiplicationTable.classList.add('d-none');
                return;
            }

            // Loop from 1 to 9 to create table rows
            for (let i = 1; i <= 9; i++) {
                const expression = `${number} x ${i}`;
                const result = number * i;

                const row = `<tr>
                                <td>${expression}</td>
                                <td>${result}</td>
                             </tr>`;
                tableBody.innerHTML += row;
            }

            // Make the table visible
            multiplicationTable.classList.remove('d-none');
        };

        generateBtn.addEventListener('click', generateTable);

        // Allow pressing Enter to generate the table
        multiplierInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                generateBtn.click();
            }
        });
    }

});