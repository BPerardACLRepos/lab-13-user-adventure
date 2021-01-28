// const questions = [];


// fetch('https://opentdb.com/api.php?amount=10').then(response => response.json()).then(data => {
//     console.log(data);
//     questions.push(...data.results);
// });

// for (let item of questions) {
//     console.log(item);
// }

async function asyncCall() {
    let url = 'https://opentdb.com/api.php?amount=10';
    let response = await fetch(url);



    let test = await response.json();
    localStorage.setItem('questions', JSON.stringify(test.results));
}

const stringQuests = localStorage.getItem('questions');
const questions = JSON.parse(stringQuests);

for (let question of questions) {
    let fixed = question.question;
    console.log(fixed);
}