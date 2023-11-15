import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  kosar:any=[]
  kosarban=new BehaviorSubject(this.kosar)

  getKosarban(){
    return this.kosarban
  }

  constructor() { }

  addTetel(id:any, db:any){
    const body={id:id, db:db}
    let i= this.kosar.findIndex(
      (elem:any)=>elem.id==id
    )
    if (i>=0) this.kosar[i].db=db
    else this.kosar.push(body)
    
    this.kosarban.next(this.kosar)
    console.log("Kosár:", this.kosar)
  }

torol(tetel:any){
  this.kosar=this.kosar.filter(
    (e:any)=>e!=tetel
  )
  this.kosarban.next(this.kosar)
}

}
