class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
if (localStorage.getItem('books') === null) {
  localStorage.setItem('books', JSON.stringify([]));
}
const listSection = document.getElementById('list');
const books = JSON.parse(localStorage.getItem('books'));

const displayBooksList = () => {
  const allBooks = JSON.parse(localStorage.getItem('books'));
  listSection.innerHTML = '';
  if (allBooks.length > 0) {
    for (let i = 0; i < allBooks.length; i += 1) {
      const oneBook = document.createElement('div');
      oneBook.innerHTML = `
      <span>"${allBooks[i].title}"</span>
      <span>"${allBooks[i].author}"</span>
      <button type="button" onclick="remove(${i})">Remove</button>`;

      listSection.append(oneBook);
    }
  }
};

const AddBook = (book) => {
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooksList();
};

// eslint-disable-next-line no-unused-vars
const remove = (index) => {
  const allBooks = JSON.parse(localStorage.getItem('books'));
  allBooks.splice(index, 1);
  const bookData = JSON.stringify(allBooks);
  localStorage.setItem('books', bookData);
  listSection.innerHTML = '';
  displayBooksList();
};
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    const newBook = new Book(title, author);
    AddBook(newBook);
  }
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

displayBooksList();
