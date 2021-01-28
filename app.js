//make constants for url categories
//Returns 10 questions, no defined category
const url = 'https://opentdb.com/api.php?amount=15';

async function asyncGetQuestions(urlAPI) {
    const response = await fetch(url);
    const responseArray = await response.json();
    const questionsArray = responseArray.results;
    return questionsArray;
}

async function asyncSetQuestionsLocally(url, KEY) {
    const questions = await asyncGetQuestions(url);
    setStorageItem(KEY, questions);
}

function setStorageItem(KEY, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(KEY, stringyItem);
}

function getStorageItem(KEY) {
    const stringyItem = localStorage.getItem(KEY);
    return JSON.parse(stringyItem);
}

function removeStoredItem(KEY) {
    localStorage.removeItem(KEY);
}