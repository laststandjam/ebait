import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FishService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getFish() {
    return this.http.get(`${this.uri}/fish`);
  }
  getFishById(id) {
    return this.http.get(`${this.uri}/fish/${id}`);
  }
  addFish(speices, location, strain, sex, size, price) {
    const fish = {
      speices: speices,
      location: location,
      strain: strain,
      sex: sex,
      size: size,
      price: price
    };
    return this.http.post(`${this.uri}/fish/add`, fish);
  }
  deleteFish(id) {
    return this.http.get(`${this.uri}/fish/delete/${id}`);
  }
}