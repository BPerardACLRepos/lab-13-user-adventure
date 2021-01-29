const params = new URLSearchParams(window.location.search);
const categoryId = params.get('id');
const categoryName = params.get('name');

document.querySelector('title').textContent = categoryName;
document.querySelector('#category-title').textContent = categoryName;

const userInfo = document.querySelector('#user-information');
const question = document.querySelector('#question');
const answers = document.querySelector('#answers');

