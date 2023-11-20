import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
  private searchSub= new BehaviorSubject("")

  constructor() { }

  getSearch(){
    return this.searchSub
  }

  setSearch(szo:any){
    this.searchSub.next(szo)
  } 
}
