import { asyncGetData } from '../async-utils.js';
import { QUESTIONS_ARRAY_KEY, USER } from '../constants.js';
import { getStorageItem, setStorageItem } from '../storage-utils.js';

const params = new URLSearchParams(window.location.search);
const categoryId = params.get('id');
const categoryName = params.get('name');

document.querySelector('title').textContent = categoryName;
document.querySelector('#category-title').textContent = categoryName;

const userInfo = document.querySelector('#user-information');
const questionsP = document.querySelector('#questions p');
const answersDiv = document.querySelector('#answers');

let correctAnswers = 0;
let currentQuestion = 0;
let questionsArray = [];


function updateUserInfo() {
    const user = getStorageItem(USER);
    userInfo.textContent = '';

    const p = document.createElement('p');
    p.textContent = `${user.name}  LIVES: ${user.lives}  SKIPS: ${user.skips}  STREAK: ${user.streak}  QUEST PROGRESS: ${correctAnswers}/${parseInt(user.difficulty) - user.completedQuests}`;
    userInfo.append(p);
    return user;
}

async function asyncGetQuestionArray() {
    const user = getStorageItem(USER);
    const totalQuestions = parseInt(user.difficulty) - user.completedQuests + 4;
    const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${categoryId}`;

    questionsArray = await asyncGetData(url, QUESTIONS_ARRAY_KEY);
}

async function askQuestion() {
    const user = updateUserInfo();
    answersDiv.textContent = '';
    if (!questionsArray.length) {
        await asyncGetQuestionArray();
    }

    const questionObject = questionsArray[currentQuestion];
    questionsP.innerHTML = questionObject.question;
    const answerArray = [...questionObject.incorrect_answers];
    const randomIndex = Math.floor(Math.random() * answerArray.length + 1);
    answerArray.splice(randomIndex, 0, questionObject.correct_answer)

    for (let answer of answerArray) {
        const label = document.createElement('label');
        label.textContent = answer;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answers';
        radio.value = answer;
        label.append(radio);
        answersDiv.append(label);
    }

    const button = document.createElement('button');
    button.textContent = 'Final Answer?';
    button.addEventListener('click', () => {
        const userAnswer = document.querySelector('#answers input:checked').value;
        console.log(userAnswer, questionObject.correct_answer);
        if (userAnswer === questionObject.correct_answer) {
            user.streak++;
            user.correctAnswers++;
            correctAnswers++;
            if (correctAnswers === parseInt(user.difficulty) - user.completedQuests && user.completedQuests === parseInt(user.difficulty)) {
                user.completedQuests++;
                setStorageItem(USER, user);
                window.location = `../results/`;
            } else if (correctAnswers === user.difficulty - user.completedQuests) {
                user.completedQuests++;
                setStorageItem(USER, user);
                window.location = `../quest-select/`;
            }
        } else {
            user.streak = 0;
            user.lives--;
            setStorageItem(USER, user);
            if (user.lives === 0) {
                window.location = `../results/`;
            }
        }

        currentQuestion++;
        askQuestion();
    });

    answersDiv.append(button);
}

askQuestion();