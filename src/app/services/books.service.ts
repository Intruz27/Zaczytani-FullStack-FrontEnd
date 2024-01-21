import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
public baseApiUrl = 'https://localhost:7111'
  
constructor(private http: HttpClient) { }

public getAllBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.baseApiUrl + '/api/Books');
}

public addBook(addBookRequest: Book): Observable<Book> {
  addBookRequest.id = uuidv4();
  return this.http.post<Book>(this.baseApiUrl + '/api/Books', addBookRequest);
}

public getBook(id: string): Observable<Book> {
  return this.http.get<Book>(this.baseApiUrl + '/api/Books/' + id);
}

public updateBook(id: string, updateBookRequest: Book): Observable<Book> {
  return this.http.put<Book>(this.baseApiUrl + '/api/Books/' + id, updateBookRequest);
}

public deleteBook(id: string): Observable<Book> {
  return this.http.delete<Book>(this.baseApiUrl + '/api/Books/' + id,);
}
}
