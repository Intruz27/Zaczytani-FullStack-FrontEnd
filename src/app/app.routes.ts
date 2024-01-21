import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { NgModule } from '@angular/core';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {
    path: '',
    component: HomepageComponent
    },
    {
    path: 'list',
    component: BooksListComponent 
    },
    {
    path: 'add',
    component: BookAddComponent 
    },
    {
    path: 'edit/:id',
    component: BookEditComponent 
    },
    {
    path: 'show/:id',
    component: BookEditComponent 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
