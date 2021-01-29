//make constants for url categories
//have question number selector for question retrieval and quests

//Returns 10 questions, no defined category
const url = 'https://opentdb.com/api.php?amount=15';


//async functions
export async function asyncGetQuestions(urlAPI) {
    const response = await fetch(url);
    const responseArray = await response.json();
    const questionsArray = responseArray.results;
    return questionsArray;
}

export async function asyncSetQuestionsLocally(url, KEY) {
    const questions = await asyncGetQuestions(url);
    setStorageItem(KEY, questions);
}