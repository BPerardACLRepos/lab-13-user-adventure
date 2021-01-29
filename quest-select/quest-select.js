import { getStorageItem } from '../storage-utils.js';
import { USER } from '../constants.js';

const questIntro = document.querySelector('#quest-selection-intro p');
const user = getStorageItem(USER);

function difficultyMessage() {
    let message = `Hello ${user.name}! `;
    if (user.difficulty === 3) {
        message += `It appears you're feeling rather timid. No worries, finish three quests and I'll give you something to boast about!`
    } else if (user.difficulty === 4) {
        message += `Been here a time or two, eh? Well, let's see if you can conquer four quests. Do that, and I'll never doubt you again!`
    } else {
        message += `You seem like a person on a mission, so I'll let you get to it. If you come out of the other end of this in one piece, all of your wildest dreams will come true!`
    }
    return message;
}

function createQuestOptions() {

}








questIntro.textContent = difficultyMessage();