// Interface for Book
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

// Class Library
class Library {
    protected books: Book[] = []; 
  
    public addBook(book: Book): void {
      this.books.push(book);
    }
  
    public getBookDetails(isbn: string): string | null {
      const book = this.books.find((b) => b.isbn === isbn);
      if (book) {
        return `Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}, Genre: ${book.genre || "N/A"}`;
      }
      return null;
    }
  }
  
  // Class DigitalLibrary extending Library
  class DigitalLibrary extends Library {
    readonly website: string;
  
    constructor(website: string) {
      super();
      this.website = website;
    }
  
    public listBooks(): string[] {
      return this.books.map((book) => book.title);
    }
  }
  

// Create an instance of DigitalLibrary
const digitalLibrary = new DigitalLibrary("https://www.mylibrary.com");

// Add books to the library
digitalLibrary.addBook({
  title: "The TypeScript Handbook",
  author: "Daniel Rosenwasser",
  isbn: "1234567890",
  publishedYear: 2020,
  genre: "Programming",
});

digitalLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "9876543210",
  publishedYear: 2008,
});

// Get details of a book by ISBN
console.log(digitalLibrary.getBookDetails("1234567890")); 
// Output: Title: The TypeScript Handbook, Author: Daniel Rosenwasser, Year: 2020, Genre: Programming

// List all book titles
console.log(digitalLibrary.listBooks()); 
// Output: [ 'The TypeScript Handbook', 'Clean Code' ]
