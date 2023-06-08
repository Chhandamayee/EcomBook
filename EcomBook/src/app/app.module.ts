import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FiltersComponent } from './Components/filters/filters.component';
import { BooksComponent } from './Components/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FiltersComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
