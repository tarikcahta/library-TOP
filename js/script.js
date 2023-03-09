function Book(title, author, pages, published, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.read = read;
}

const atomicHabits = new Book(
  'Atomic Habits',
  'James Clear',
  '306',
  '2018',
  false
);

const myLibrary = [];

myLibrary.push(atomicHabits);

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  document.querySelector('form').reset();
}

function getDetailsFromInput() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const published = document.getElementById('published').value;
  const haveBeenRead = document.getElementById('read-btn').checked;

  return new Book(title, author, pages, published, haveBeenRead);
}

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const newBook = getDetailsFromInput();
  addBookToLibrary(newBook);
});
