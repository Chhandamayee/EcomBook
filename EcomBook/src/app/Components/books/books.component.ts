import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  apiData: any;
  constructor(private http: BooksService) {
    
   }
  ngOnInit(): void {
    this.http.getBooks().subscribe(response=>{
      this.apiData = response;
    })
      
  }

}
