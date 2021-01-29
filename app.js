//make constants for url categories
//have question number selector for question retrieval and quests

//Returns 10 questions, no defined category
const url = 'https://opentdb.com/api.php?amount=15';


// //async functions
// async function asyncGetQuestions(urlAPI) {
//     const response = await fetch(url);
//     const responseArray = await response.json();
//     const questionsArray = responseArray.results;
//     return questionsArray;
// }

// async function asyncSetQuestionsLocally(url, KEY) {
//     const questions = await asyncGetQuestions(url);
//     setStorageItem(KEY, questions);
// }

// //local storage functions
// function setStorageItem(KEY, value) {
//     const stringyItem = JSON.stringify(value);
//     localStorage.setItem(KEY, stringyItem);
// }

// function getStorageItem(KEY) {
//     const stringyItem = localStorage.getItem(KEY);
//     return JSON.parse(stringyItem);
// }

// function removeStorageItem(KEY) {
//     localStorage.removeItem(KEY);
// }

//user creation functions

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