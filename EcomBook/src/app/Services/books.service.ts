import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("https://bookcart.azurewebsites.net/api/Book");
  }
}
