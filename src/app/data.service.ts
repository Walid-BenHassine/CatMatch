import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }
  getCats() {
    const headers = new HttpHeaders()
    .append("Access-Control-Allow-Origin", "*")
    .append("Access-Control-Allow-Methods","*")
    .append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return this.http.get('https://latelier.co/data/cats.json',{headers})
  }
}
