class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const books = [];

AddBook = (book) => {
  if (localStorage.getItem("books") === null) {
    localStorage.setItem("books", JSON.stringify([]));
  }
  books.push(book);
  const booksData = JSON.stringify(books);
  console.log(booksData);
  localStorage.setItem("books", booksData);
};

displayBooksList = () => {
  const listSection = document.getElementById("list");

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

remove = (index) => {
  const booksData = JSON.parse(localStorage.getItem("books"));
  booksData.splice(index, 1);
  const bData = JSON.stringify(booksData);
  localStorage.setItem("books", bData);
  displayBooksList();
};

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title !== "" && author !== "") {
    const newBook = new Book(title, author);
    AddBook(newBook);
    displayBooksList();
  }
});
