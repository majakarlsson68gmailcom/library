const myLibrary = [];

function Book(title, subtitle, pages) {
    this.title = title;
    this.subtitle = subtitle;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function renderLibrary(myLibrary){
    myLibrary.forEach(book => {
        console.log(book)
        createBook(book);
        
    });
}

addBookToLibrary()
renderLibrary(myLibrary);



function addBookToLibrary(){
    let book = new Book("Majas testbok", "Detta är ett hårdkodat test", 300)
    let book2 = new Book("Detta är min andra testbok som jag testar", "Denna har jag hårdkodat också bara för att testa, inser nu att jag glömt författare", 560);
    myLibrary.push(book, book2)
    
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
    

    const textContainer = document.createElement("div");
    textContainer.classList.add("book-card-text-container")
    titleContainer.append(textContainer);

    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-card-title");
    bookTitle.textContent = book.title   

    const subTitle = document.createElement("h3");
    subTitle.classList.add("book-card-subtitle");
    subTitle.textContent = book.subtitle;
    textContainer.append(bookTitle, subTitle);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("book-card-button-container")
    const unreadToggle = document.createElement("button");
    unreadToggle.classList.add("read", "book-card-button");
    unreadToggle.textContent = "Oläst"

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("book-card-button", "remove");
    deleteButton.textContent = "Ta bort";

    btnContainer.append(unreadToggle, deleteButton);
    bookCard.append(titleContainer, textContainer, btnContainer);
    console.log(bookCard)
    cardGrid.append(bookCard);

}