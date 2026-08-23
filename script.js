const myLibrary = [];

function Book(title, subtitle, pages) {
    this.title = title;
    this.subtitle = subtitle;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function renderLibrary(){
    myLibrary.forEach(book => {

        const bookCard = document.querySelector(".book-card");
        const bookTextCointainer = document.querySelector(".book-card__title-container");

        const bookTitle = document.getElementById("book-card-title");
        bookTitle.textContent = book.title;
        bookTextCointainer.appendChild(bookTitle);
        console.log(bookTitle)

        const subTitle = document.querySelector(".book-card__subtitle");
        subTitle.textContent = book.subtitle;

        const pages = document.getElementById("book-card-pages");
        pages.textContent = `${book.pages} sidor`;
    });
}

renderLibrary();

addBookToLibrary()

function addBookToLibrary(){
    let book = new Book("Majas testbok", "Detta är ett hårdkodat test", 300)
    myLibrary.push(book)
    console.log(myLibrary)
}

// Kanske går att lägga in ett helt objekt som skapas från constructorn eller en annan funktion?
function createBook(book){
   
    const cardGrid = document.querySelector(".card-grid");
    
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    cardGrid.append(bookCard);
    
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("book-card-title-container");
    const pages = document.createElement("span");
    pages.classList.add("book-card-pages");
    pages.textContent = `${book.pages} sidor`;
    titleContainer.append(pages);
    

    const textContainer = document.querySelector(".book-card-text-container");
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-card-title");
    bookTitle.textContent = book.title
    titleContainer.appendChild(textContainer);
    textContainer.appendChild(bookTitle);
    

    const subTitle = document.createElement("h3");
    subTitle.classList.add("book-card-subtitle");
    subTitle.textContent = book.subtitle;
    textContainer.appendChild(subTitle);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("book-card-button-container")
    const unreadToggle = document.createElement("button");
    unreadToggle.classList.add("read", "book-card-button");
    unreadToggle.textContent = "Oläst"

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("book-card-button", "remove");
    deleteButton.textContent = "Ta bort";

    btnContainer.append(unreadToggle, deleteButton);

   
    bookCard.append(titleContainer, textContainer, btnContainer)

}
 let book = new Book("Majas testbok", "Detta är ett hårdkodat test", 300)
createBook(book)