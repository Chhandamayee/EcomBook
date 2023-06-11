import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():string[]{
    return [
      '/assets/chicken_fried_rice.jpg',
      '/assets/french-fries.jpg',
      '/assets/fried-chicken-wings.jpg',
      '/assets/Fried-Chicken.jpg',
      '/assets/hamburger.jpg',
      '/assets/Noodles.jpeg',
      '/assets/pasta.jpeg'
    ]
  }
}
