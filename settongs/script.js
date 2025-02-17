const settingsMenu = document.querySelector('.settings-menu');
const openButton = document.getElementById('open-settings');
const closeButton = document.getElementById('close-settings');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const settingsIcon = document.getElementById('open-settings');

openButton.addEventListener('click', () => {
    settingsMenu.classList.add('visible');
    settingsMenu.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    settingsMenu.classList.add('hidden');
    settingsMenu.classList.remove('visible');
});

document.getElementById('save-button').addEventListener('click', () => {
    const darkMode = document.getElementById('dark-mode-toggle').checked;
    const language = document.getElementById('language-select').value;
    const volume = document.getElementById('volume-control').value;

    alert(`Settings Saved:\nDark Mode: ${darkMode}\nLanguage: ${language}\nVolume: ${volume}`);
});

// Select the Dark Mode toggle button
// Select the settings icon


// Add an event listener for changes to the toggle


// Dark Mode toggle


darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        // Enable Dark Mode
        document.body.classList.add('dark-mode');
        // Update settings icon to Dark Mode
        settingsIcon.src = 'assets/settings_icon_darkmode.png';
    } else {
        // Disable Dark Mode
        document.body.classList.remove('dark-mode');
        // Revert settings icon to Light Mode
        settingsIcon.src = 'assets/settings_icon.png';
    }
});
darkModeToggle.dispatchEvent(new Event("change"));

