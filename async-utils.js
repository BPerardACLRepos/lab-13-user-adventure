export async function asyncGetQuestions(url, arrayKeyName) {
    const response = await fetch(url);
    const responseArray = await response.json();
    const questionsArray = responseArray[arrayKeyName];
    return questionsArray;
}

export async function asyncSetQuestionsLocally(url, KEY) {
    const questions = await asyncGetQuestions(url);
    setStorageItem(KEY, questions);
}