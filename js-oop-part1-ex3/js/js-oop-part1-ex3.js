class Book {
   constructor(title, author, haveRead) {
      this.title = title;
      this.author = author;
      this.haveRead = haveRead;
   }
}

function logBook(book) {
   console.log(`${book.title} by ${book.author}`);
}

function logBooksUnread(books) {
   for (let i = 0; i < books.length; i++) {
      if (!books[i].haveRead) {
         logBook(books[i]);
      }
   }
}

let book1 = new Book("Harry Poter", "J. K. Rolling", false);
let book2 = new Book("Tom Soyer", "Mark Twain", true);
let book3 = new Book("Oliver Twist", "Charles Dickens", false);
let book4 = new Book("Black Box", "Amos Oz", true);
let books = [book1, book2, book3, book4];

logBooksUnread(books);