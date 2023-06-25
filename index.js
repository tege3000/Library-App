let myLibrary = [{title: "Harry Potter", author: "JK Rowling", pages: 412, haveRead: "not yet read"}, {title: "Americana", author: "Chiamanda Ngozi Adiche", pages: 452, haveRead: "read"}, {title: "Sapiens", author: "Yuval Noah", pages: 412, haveRead: "not yet read"}, {title: "The Holy Bible", author: "Several Authors", pages: 512, haveRead: "read"} ];
const addBookBtn = document.querySelector(".addBook");



function Book (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = () => {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
    }
}

//addBookToLibrary
addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const haveRead = document.querySelector('input[name="haveRead"]:checked').value;

    const book = new Book(title, author, pages, haveRead);

    myLibrary.push(book);

    console.log(myLibrary);

    displayBook(myLibrary);

    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".pages").value = "";
    document.querySelector('input[name="haveRead"]:checked').checked = false;
});

function setupBookCard(b) {
    cardContainer = document.querySelector(".cards");
    cardDiv = document.createElement("div");
    cardDiv.classList = "card";
    cardP = document.createElement("h4");
    cardP.textContent = `Title: ${b.title}`;
    cardh3 = document.createElement("h4");
    cardh3.textContent = `Author: ${b.author}`;
    cardh4 = document.createElement("h4");
    cardh4.textContent = `Number of pages: ${b.pages}`;
    cardP2 = document.createElement("h4");
    cardP2.textContent = `Reading status: ${b.haveRead}`;

    cardDiv.appendChild(cardP);
    cardDiv.appendChild(cardh3);
    cardDiv.appendChild(cardh4);
    cardDiv.appendChild(cardP2);

    cardContainer.appendChild(cardDiv);
}

function displayBooks(myLibrary) {
    myLibrary.forEach((b) => {
        setupBookCard(b)
    })
}

function displayBook(myLibrary) {
    const length = myLibrary.length - 1;

    setupBookCard(myLibrary[length]); //only adds the last element in myLibrary array
}

displayBooks(myLibrary);