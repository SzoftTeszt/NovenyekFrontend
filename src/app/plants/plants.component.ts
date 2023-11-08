import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KosarService } from '../kosar.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  
  novenyek:any

  constructor(
      private base:BaseService, 
      private kosar:KosarService){
    this.base.getPlants().subscribe(
      (adatok:any)=> this.novenyek=adatok
    )
  }


  ar(ar:any,db:any){
    return ar*db
  }
  kosarba(id:any,db:any){
    this.kosar.addTetel(id,db)
    // console.log(id,"; ",db)
  }
}
