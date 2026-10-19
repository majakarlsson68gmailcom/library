# Book Library

A small library app built for the [Library project](https://www.theodinproject.com/lessons/node-path-javascript-library) in The Odin Project. Users add books through a form, mark them as read or unread, and remove them. The interface is in Swedish.

**[Live site](https://majakarlsson68gmailcom.github.io/library/)**

![Book Library with three books and the add-book form](<img width="1440" height="900" alt="screenshot" src="https://github.com/user-attachments/assets/1a03c001-b1cc-445e-a6a3-85b9d93b35af" />
)

## Features

- Add a book with title, subtitle, author and number of pages.
- Toggle each book between read (Läst) and unread (Oläst).
- Remove a book from the library.

## Built with

- HTML
- CSS (Flexbox and Grid)
- Vanilla JavaScript

## How it works

**Data first, then the DOM.** Each book is created with a `Book` constructor and stored in the `myLibrary` array. Every book gets a unique id from `crypto.randomUUID()`, which is also saved on its card as `data-id`. That id connects a card in the DOM to the right object in the array.

**One listener for all cards (event delegation).** The cards are created after the page has loaded, so they cannot get listeners up front. Instead, one click listener sits on the grid that contains them. It uses `closest(".book-card")` to find the clicked card, then checks the button's class:

- `remove` deletes the card and removes the book from the array with `findIndex` and `splice`.
- `read` finds the book with `find`, flips its `read` value and updates the button text.

**Safe rendering.** All text from the form is written with `textContent`, not `innerHTML`, so user input is never interpreted as HTML.

## What I learned

_[Write 2–3 sentences in your own words. For example: why the listener sits on the grid and not on each button, or what was hard about keeping the array and the DOM in sync.]_

## Continued development

- Listen for the form's `submit` event instead of the button's `click` event. The click handler calls `preventDefault()`, which skips the browser's validation, so a book with an empty title can be added even though the fields are `required`.
- Load the Satoshi font with `@font-face` or from a font service. It is only named in the CSS, so the page falls back to the browser's default font.
- Make the layout responsive. The two-column grid and the sidebar overflow on narrower screens.
- Set `lang="sv"` on the `<html>` element, since the interface is in Swedish.
- Use an `article` or `li` for each book card instead of a `div`, and keep a logical heading order inside the card.
- Save the library in `localStorage`, so the books remain after a page reload.

## Author

Maja Karlsson · [LinkedIn](https://www.linkedin.com/in/maja-karlsson-129566292/)<img width="1440" height="900" alt="screenshot" src="https://github.com/user-attachments/assets/05c7b8a7-89e2-4e49-8e2f-dfda95d54c07" />
