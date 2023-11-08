import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  kosar:any=[]
  constructor() { }

  addTetel(id:any, db:any){
    const body={id:id, db:db}
    let i= this.kosar.findIndex(
      (elem:any)=>elem.id==id
    )
    if (i>=0) this.kosar[i].db=db
    else this.kosar.push(body)

    console.log("Kosár:", this.kosar)
  }
}
