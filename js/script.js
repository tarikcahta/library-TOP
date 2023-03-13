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
  false,
);

let myLibrary = [];

const displayDiv = document.getElementById('library');

myLibrary.push(atomicHabits);

function resetDisplayOfBooks() {
  displayDiv.innerHTML = '';
}

function makeBookCard(book) {
  const cardDiv = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const published = document.createElement('p');
  const btnsDiv = document.createElement('div');
  const readLink = document.createElement('button');
  const removeBtn = document.createElement('button');

  readLink.addEventListener('click', () => {
    if (book.read) {
      // eslint-disable-next-line no-param-reassign
      book.read = !book.read;
      readLink.textContent = 'Not read';
    } else if (!book.read) {
      // eslint-disable-next-line no-param-reassign
      book.read = !book.read;
      readLink.textContent = 'Read';
    }
  });

  removeBtn.addEventListener('click', () => {
    // displayDiv.removeChild(cardDiv);
    myLibrary = myLibrary.filter((item) => item.title !== title.textContent);
    // eslint-disable-next-line no-use-before-define
    renderDisplayOfBooks();
  });

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;
  published.textContent = `${book.published}`;
  if (book.read) {
    readLink.textContent = 'Read';
  } else {
    readLink.textContent = 'Not read';
  }
  removeBtn.textContent = 'Remove';
  console.log(book);

  displayDiv.appendChild(cardDiv);
  cardDiv.appendChild(title);
  cardDiv.appendChild(author);
  cardDiv.appendChild(pages);
  cardDiv.appendChild(published);
  cardDiv.appendChild(btnsDiv);
  btnsDiv.appendChild(readLink);
  btnsDiv.appendChild(removeBtn);
  cardDiv.classList.add('book');
  readLink.classList.add('btn');
  readLink.classList.add('btn-book-card');
  removeBtn.classList.add('btn');
  removeBtn.classList.add('btn-book-card');
}

function renderDisplayOfBooks() {
  resetDisplayOfBooks();
  myLibrary.map((book) => makeBookCard(book));
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  renderDisplayOfBooks();
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
  document.getElementById('book-input').style.display = 'none';
});

const addBookBtn = document.getElementById('btn');
addBookBtn.addEventListener('click', () => {
  document.getElementById('book-input').style.display = 'block';
});

displayDiv.addEventListener('click', () => {
  document.getElementById('book-input').style.display = 'none';
});
