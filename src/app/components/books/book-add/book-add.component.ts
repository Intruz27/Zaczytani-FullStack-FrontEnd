import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { Router } from '@angular/router';
import { Book } from '../../../models/book.model';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  providers: [BooksService],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  addBookRequest: Book = {
  id: '',
  title: '',
  author: '',
  type: '',
  description: '',
  serialNumber: '',
  location: ''
}

constructor(private booksService: BooksService, private router: Router){}

public addBook() {
  this.booksService.addBook(this.addBookRequest).subscribe({
    next: () => {
      this.router.navigate(['list']);
    }
  });
}
}
