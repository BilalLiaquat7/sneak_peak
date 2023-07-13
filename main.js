class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const books = [];

const AddBook = (book) => {
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([]));
  }
  books.push(book);
  const booksData = JSON.stringify(books);
  localStorage.setItem('books', booksData);
};

const displayBooksList = () => {
  const listSection = document.getElementById('list');

  const tag = document.querySelector('.list');
  let child = tag.lastElementChild;
  while (child) {
    tag.removeChild(child);
    child = tag.lastElementChild;
  }
  const booksData = JSON.parse(localStorage.getItem('books'));
  // eslint-disable-next-line no-unused-vars
  booksData.map((book, index) => {
    const oneBook = document.createElement('div');
    oneBook.innerHTML = `
    <span>"${book.title}"</span>
    <span>"${book.author}"</span>
    <button type="button" onclick="remove(${index})">Remove</button>`;

    listSection.appendChild(oneBook);
    return oneBook;
  });
};
// eslint-disable-next-line no-unused-vars
const remove = (index) => {
  const booksData = JSON.parse(localStorage.getItem('books'));
  booksData.splice(index, 1);
  const bData = JSON.stringify(booksData);
  localStorage.setItem('books', bData);
  displayBooksList();
};

const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    const newBook = new Book(title, author);
    AddBook(newBook);
    displayBooksList();
  }
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
