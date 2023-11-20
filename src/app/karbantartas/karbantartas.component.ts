import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-karbantartas',
  templateUrl: './karbantartas.component.html',
  styleUrls: ['./karbantartas.component.css']
})
export class KarbantartasComponent {

novenyek:any
oszlopok:any
message:any
ujNoveny:any={}
keresendo:any=""
constructor(private base:BaseService, 
  private config:ConfigService,
  private search:SearchService){

  this.config.getMessage().subscribe(
    (res:any)=>{
      this.message=res.karbantartas
      this.oszlopok=res.karbantartas.oszlopok
    }
  )

  this.base.getPlants().subscribe(
    (a)=> this.novenyek=a
  )

  this.search.getSearch().subscribe(
    (res:any)=>this.keresendo=res
  )
}  


updatePlant(noveny:any){
  console.log("update", noveny)
  this.base.updatePlant(noveny).subscribe(
    ()=>console.log("Sikeres módosítás")
  )
}

deletePlant(noveny:any){
  this.base.deletePlant(noveny).subscribe(
    ()=>this.base.getPlants().subscribe(
      (a)=>this.novenyek=a
    )
  )
}
addPlant(){
  this.base.addPlant(this.ujNoveny).subscribe(
    ()=>{this.ujNoveny={}}
  )
}

}
