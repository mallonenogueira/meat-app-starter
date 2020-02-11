import { Injectable } from '@angular/core';
import { Restaurant as RestaurantModel } from './restaurant/restaurant.model';


@Injectable()
export class RestaurantsService {

  constructor() { }

  restaurants(): RestaurantModel[] {
    return [];
  }

}
