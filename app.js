import { setStorageItem } from './storage-utils.js';

const userCreationForm = document.querySelector('#user-creation form');

userCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userCreationForm);

    const user = {
        name: formData.get('name'),
        difficulty: formData.get('difficulty'),
        lives: 3,
        correctAnswers: 0,
        skips: 1,
    };

    setStorageItem('user', user);

    window.location = './quest-select/';
});