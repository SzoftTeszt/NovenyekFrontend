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

  addPlant(body:any){
    return this.http.post(this.url,body)
  }

  updatePlant(body:any){
    return this.http.put(this.url+body.id,body)
  }

  deletePlant(body:any){
    return this.http.delete(this.url+body.id)
  }




  addOrder(body:any){
    return this.http.post(this.murl,body)
  }
}
