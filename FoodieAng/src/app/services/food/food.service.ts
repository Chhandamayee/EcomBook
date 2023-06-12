import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // getAll():string[]{
  //   return [
  //     '/assets/chicken_fried_rice.jpg',
  //     '/assets/french-fries.jpg',
  //     '/assets/fried-chicken-wings.jpg',
  //     '/assets/Fried-Chicken.jpg',
  //     '/assets/hamburger.jpg',
  //     '/assets/Noodles.jpeg',
  //     '/assets/pasta.jpeg'
  //   ]
  // }
  getAll():Foods[]{
    return[
      {
        id:1,
        name: 'Chicken Fried Rice',
        cookTime:'10-20',
        price:210,
        favorite:false,
        origins:['china'],
        stars: 4.5,
        imageUrl: '/assets/chicken_fried_rice.jpg',
        tags:['Fastfood','Lunch']
      },
      {
        id:2,
        name: 'Hamburger',
        cookTime:'20-30',
        price:199,
        favorite:false,
        origins:['Italy'],
        stars: 4,
        imageUrl: '/assets/hamburger.jpg',
        tags:['Fastfood','Dinner']
      },
      {
        id:3,
        name: 'French Fries',
        cookTime:'5-10',
        price:80,
        favorite:false,
        origins:['Germany'],
        stars: 4.2,
        imageUrl: '/assets/french-fries.jpg',
        tags:['Fastfood','Snacks','FingerFood']
      },
      {
        id:4,
        name: 'Honey Chicken',
        cookTime:'10-15',
        price:180,
        favorite:false,
        origins:['India','Japan'],
        stars: 5,
        imageUrl: '/assets/Fried-Chicken.jpg',
        tags:['Fastfood','Snacks']
      },
      {
        id:5,
        name: 'Fried Chicken Wings',
        cookTime:'10-15',
        price:180,
        favorite:false,
        origins:['India','Japan'],
        stars: 5,
        imageUrl: '/assets/fried-chicken-wings.jpg',
        tags:['Fastfood','Snacks']
      },
      {
        id:6,
        name: 'Pasta',
        cookTime:'10-15',
        price:310,
        favorite:false,
        origins:['India','Japan','Korea','Japan'],
        stars: 5,
        imageUrl: '/assets/pasta.jpeg',
        tags:['Fastfood','Snacks']
      },
      {
        id:7,
        name: 'Noodles',
        cookTime:'15-20',
        price:250,
        favorite:false,
        origins:['India','China','Korea'],
        stars: 5,
        imageUrl: '/assets/Noodles.jpeg',
        tags:['Fastfood','Snacks']
      }
    ];
  }
}
