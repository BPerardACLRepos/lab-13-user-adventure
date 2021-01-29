import { getStorageItem } from '../storage-utils.js';
import { asyncGetQuestions } from '../async-utils.js';
import { CATEGORIES_ARRAY_KEY, CATEGORIES_URL, USER } from '../constants.js';

const questIntro = document.querySelector('#quest-selection-intro p');
const questSelect = document.querySelector('#quest-selection-options');
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
    questIntro.textContent = message;
}

async function createQuestOptions() {
    const p = document.createElement('p');
    p.textContent = `It's time to choose your next quest.`;
    questSelect.append(p);

    const select = document.createElement('select');
    select.name = `quest-id`;

    const categoryArray = await asyncGetQuestions(CATEGORIES_URL, CATEGORIES_ARRAY_KEY);

    for (let category of categoryArray) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        select.append(option);
    }

    const button = document.createElement('button');
    button.textContent = `It's go time!`;
    button.addEventListener('click', () => {
        window.location = `../quest-play/?id=${select.value}&name=${select.options[select.selectedIndex].text}`;
    });

    questSelect.append(select, button);
}

difficultyMessage();
createQuestOptions();
