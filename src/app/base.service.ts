import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url="http://localhost:3000/novenyek/"
  private murl="http://localhost:3000/megrendelesek"

  constructor(private http:HttpClient) { }

  getPlants(){
    return this.http.get(this.url)
  }

  addOrder(body:any){
    return this.http.post(this.murl,body)
  }
}
