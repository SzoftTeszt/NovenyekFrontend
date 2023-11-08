import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  
  nyovenyek:any

  constructor(private base:BaseService){
    this.base.getPlants().subscribe(
      (adatok:any)=> this.nyovenyek=adatok
    )
  }
}
