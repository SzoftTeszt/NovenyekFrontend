import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-karbantartas',
  templateUrl: './karbantartas.component.html',
  styleUrls: ['./karbantartas.component.css']
})
export class KarbantartasComponent {

novenyek:any
oszlopok=[
  {key:"id", text:"#", type:"plain"},
  {key:"megnevezes", text:"Név", type:"text"},
  {key:"kepUrl", text:"KépUrl", type:"textarea"},
  {key:"leiras", text:"Leírás", type:"textarea"},
  {key:"ar", text:"Ár", type:"number"}
]


constructor(private base:BaseService){
  this.base.getPlants().subscribe(
    (a)=> this.novenyek=a
  )

}  
}
