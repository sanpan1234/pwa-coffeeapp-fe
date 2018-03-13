import { Injectable } from '@angular/core';
import { PlaceLocation } from '../models/place-location';
import { Coffee } from '../models/coffee';
import { Http } from '@angular/http'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public wsEndpoint = 'http://localhost:3102';
  getList(callback) {
    const list = [
      new Coffee('Double Espresso', 'Sunny Cafe', new PlaceLocation('123 Market St', 'San Francisco')),
      new Coffee('Caramel Americano', 'StarCoffee', new PlaceLocation('Gran Via 34', 'Madrid'))
    ]
    callback(list);
    /* this.http.get(`${this.wsEndpoint}/coffees`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      }) */
  }

  save(coffee, callback) {
    if (coffee._id) {
      //its an update
      this.http.put(`${this.wsEndpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        });
    } else {
      this.http.post(`${this.wsEndpoint}/coffees`, coffee)
        .subscribe(response => {
          callback(true);
        })
    }
  }

  get(coffeeId: string, callback){
    this.http.get(`${this.wsEndpoint}/coffees/${coffeeId}`)
      .subscribe(response => {
        callback(response.json());
      })
  }
}
