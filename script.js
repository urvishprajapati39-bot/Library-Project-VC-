 
const bookForm = document.getElementById(bookForm);
const bookName = document.getElementById(bookName);
const author = document.getElementById(author);
const bookList = document.getElementById(bookList);
const search = document.getElementById(search);

let books = [];

function displayBooks() {
    bookList.innerHTML = ;

    const keyword = search.value.toLowerCase();

    books.forEach((book, index) => {
        if (
            book.name.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword)
        ) {
            const row = document.createElement(tr);

            const nameCell = document.createElement(td);
            nameCell.textContent = book.name;

            const authorCell = document.createElement(td);
            authorCell.textContent = book.author;

            const actionCell = document.createElement(td);
            const deleteButton = document.createElement(button);

            deleteButton.textContent = Delete;
            deleteButton.className = delete-btn;

            deleteButton.addEventListener(click, () => {
                books.splice(index, 1);
                displayBooks();
            });

            actionCell.appendChild(deleteButton);
            row.append(nameCell, authorCell, actionCell);
            bookList.appendChild(row);
        }
    });
}

bookForm.addEventListener(submit, function(event) {
    event.preventDefault();

    const name = bookName.value.trim();
    const writer = author.value.trim();

    if (name ===  || writer === ) {
        return;
    }

    books.push({
        name: name,
        author: writer
    });

    bookForm.reset();
    displayBooks();
});

search.addEventListener(input, displayBooks);

