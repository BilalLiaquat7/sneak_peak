let books = [];
let book = {};

const listSection = document.getElementById("list");

const booksList = () => {
  let tag = document.querySelector(".list");
  let child = tag.lastElementChild;
  while (child) {
    tag.removeChild(child);
    child = tag.lastElementChild;
  }
  const booksData = JSON.parse(localStorage.getItem("books"));
  booksData.map((book, index) => {
    const oneBook = document.createElement("div");
    //   oneBook.classList.add('books_data');
    oneBook.innerHTML = `
    <span>"${book.title}"</span>
    <span>"${book.author}"</span>
    <button type="button" onclick="remove(${index})">Remove</button>`;

    listSection.appendChild(oneBook);
  });
};

const add = () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;

  book = {};
  book["title"] = title;
  book["author"] = author;
  books.push(book);
  const booksData = JSON.stringify(books);
  localStorage.setItem("books", booksData);
  booksList();
};

const remove = (index) => {
  const booksData = JSON.parse(localStorage.getItem("books"));
  booksData.splice(index, 1);
  const bData = JSON.stringify(booksData);
  localStorage.setItem("books", bData);
  booksList();
};
