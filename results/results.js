import { getStorageItem } from '../storage-utils.js';
import { USER } from '../constants.js';

const outcomeTitle = document.querySelector('#outcome-title');
const outcomeSummary = document.querySelector('#outcome-summary');

const user = getStorageItem(USER);

if (user.lives === 0) {
    outcomeTitle.textContent = `Maybe Next Time...`;
    const p = document.createElement('p');
    p.textContent = `${user.name} the good news is, it's just trivia. The bad news is, the whole point of this was trivia. I guess that's kind of the same thing, sorry I didn't come up with something more helpful.`;
    const img = document.createElement('img');
    img.src = '../assets/try-again.gif';
    outcomeSummary.append(p, img);
} else if (user.completedQuests === parseInt(user.difficulty)) {
    outcomeTitle.textContent = `Welcome Quizzard!`;
    const p = document.createElement('p');
    p.textContent = `First off ${user.name}, I never doubted you. Secondly, I didn't think anybody would actually see this message, so...`;
    const img = document.createElement('img');
    img.src = '../assets/celebrate.gif';
    outcomeSummary.append(p, img);
} else {
    outcomeTitle.textContent = `You Tried.`;
    const p = document.createElement('p');
    p.textContent = `You kind of gave it a good go ${user.name}, so that's something.`;
    const img = document.createElement('img');
    img.src = '../assets/meh.gif';
    outcomeSummary.append(p, img);
}
const p = document.createElement('p');
p.textContent = `FINAL STATS: Completed Quests ${user.completedQuests} - Correct Answers ${user.correctAnswers} - Remaining Lives ${user.lives} - Remaining Skips ${user.skips}`;
outcomeSummary.append(p);