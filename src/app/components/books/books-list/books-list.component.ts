import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../../../services/books.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../../../models/book.model';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, NavbarComponent],
  providers: [HttpClient, BooksService],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{
  
  public books: Book[] = [];
  //   {
  //     id: '1',
  //   name: 'John',
  //   email: 'john@gmail.com',
  //   phone: 111222333,
  //   salary: 1000,
  //   department: 'I',
  //   },
  //   {
  //     id: '2',
  //   name: 'Emily',
  //   email: 'emily@gmail.com',
  //   phone: 222333444,
  //   salary: 1500,
  //   department: 'II',
  //   },
  //   {
  //     id: '3',
  //   name: 'Peter',
  //   email: 'peter@gmail.com',
  //   phone: 333444555,
  //   salary: 2000,
  //   department: 'III',
  //   },
  //   {
  //     id: '4',
  //   name: 'Robert',
  //   email: 'robert@gmail.com',
  //   phone: 444555666,
  //   salary: 2000,
  //   department: 'IV',
  //   },
  // ];

  constructor(private booksService: BooksService, private router: Router) {}

  public ngOnInit(): void { 
  
    this.booksService.getAllBooks().subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (response) => {
          console.log(response);
        }
    })
  }

  public deleteBook(id: string) {
    this.booksService.deleteBook(id).subscribe({
      next: () => {
        this.router.navigate(['list']);
      }
    })
  }
   

}
