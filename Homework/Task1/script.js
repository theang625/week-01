// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Widget 1: Profile Card Logic ---
    const toggleBtn = document.getElementById('profile-toggle-btn');
    const moreInfo = document.getElementById('profile-more-info');

    // Check if the elements exist before adding an event listener
    if (toggleBtn && moreInfo) {
        toggleBtn.addEventListener('click', () => {
            // Check if the extra info is currently hidden
            const isHidden = moreInfo.classList.contains('d-none');

            if (isHidden) {
                // If hidden, show it and change button text
                moreInfo.classList.remove('d-none');
                toggleBtn.textContent = 'Show less';
            } else {
                // If visible, hide it and change button text
                moreInfo.classList.add('d-none');
                toggleBtn.textContent = 'Show more';
            }
        });
    }

    // --- Logic for other widgets will go here ---

});