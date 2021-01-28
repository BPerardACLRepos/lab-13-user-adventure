# lab-13-user-adventure

# Quizmaster!
- User attempts to make it through five rounds of questions
 > Rounds Question Count: 5, 4, 3, 2, 1
 > User chooses category for each round
  * Five Questions right in a row earns a skip

# User
- Three lives
- One Skip
 > Five correct questions in a row earns a skip
 > User {
     name: user,
     lives: 3,
     skips: 1,
     *streak: 5/10 earn skip (skip/wrong negates streak)
     correct_answers: 0-15
     *games_played, questions_correct, questions_wrong
 }

 # Endgame
 - Five user ratings
 - User died
 - Top streak
 - Correct answers
  * Skipped/Incorrect

# Quests
- Questions pulled from API and saved in const
- Eight questions most needed per category


## USER INFO PAGE
- Give instructions
- User picks name

## LIST PAGE
- User chooses quiz kingdom to enter
- Questions pulled from API
- Id used to render Quest page

## QUEST PAGE
- Answer Questions
- User can quit, answer question, quit, or restart game
- Track Lives, skips, answers correct/left for round
- Return to List page when round completed
- When five communities beat, quit, or all lives lost; go to endgame page
