import { BooksService } from '../../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../models/book.model';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../header/header.component";

@Component({
    selector: 'app-book-edit',
    standalone: true,
    providers: [BooksService],
    templateUrl: './book-edit.component.html',
    styleUrl: './book-edit.component.css',
    imports: [CommonModule, FormsModule, NavbarComponent, RouterModule, HeaderComponent]
})
export class BookEditComponent implements OnInit{
  public readonly: boolean = false;
  public bookDetails: Book = {} as Book;

  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router){}
  
  public ngOnInit(): void {

    if( (this.router.url).includes('show')){
      this.readonly = true;
    } else {
      this.readonly = false;
    }
   this.route.paramMap.subscribe({
    next: (params) => {
      const id = params.get('id');

      if(id){
        this.booksService.getBook(id).subscribe({
          next: (response) => {
            this.bookDetails = response;
          }
        })
      }
    }
   })
  }

  public updateBook() {
    this.booksService.updateBook(this.bookDetails.id, this.bookDetails).subscribe({
      next: () => {
        this.router.navigate(['list']);
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
