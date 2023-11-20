import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KosarService } from '../kosar.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  
  novenyek:any
  keresendo:any=""

  constructor(
      private base:BaseService, 
      private kosar:KosarService,
      private search:SearchService){

    this.base.getPlants().subscribe(
      (adatok:any)=> this.novenyek=adatok
    )

    this.search.getSearch().subscribe(
      (res:any)=>this.keresendo=res
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
