import { setStorageItem } from './storage-utils.js';

const userCreationForm = document.querySelector('#user-creation form');

userCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userCreationForm);

    const user = {
        name: formData.get('name'),
        difficulty: formData.get('difficulty'),
        lives: 3,
        skips: 1,
        correctAnswers: 0,
        completedQuests: 0,
        streak: 0,
    };

    setStorageItem('user', user);

    window.location = './quest-select/';
});