import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';

// import { RatingModule } from 'ng-starrating';
// import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // RatingModule
    // StarRatingModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
