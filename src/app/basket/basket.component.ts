import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  tetelek:any
  novenyek:any=[]

  constructor(
    private kosar:KosarService,
    private base:BaseService
  ){
    this.kosar.getKosarban().subscribe(
      (a)=> this.tetelek=a
    )

    this.base.getPlants().subscribe(
      (adatok:any)=> this.novenyek=adatok
    )

  }

  keresNoveny(id:any){
    let n= this.novenyek.filter(
      (n:any)=>n.id==id
    )

    console.log("Növény",n)
    return n[0];
  }

  tetelOsszes(tetel:any){
    let noveny = this.keresNoveny(tetel.id)
    // console.log("db",tetel.db)
    // console.log("ar",noveny.ar)
    let osszes= Number(tetel.db)*Number(noveny.ar)
    // console.log(osszes,"Ft")
    return osszes
  }

  osszesen()
  {
    let fizetendo=0
    this.tetelek.forEach(
      (e:any)=> fizetendo+= this.tetelOsszes(e)
    )
    return fizetendo
  }

  torol(tetel:any){
    this.kosar.torol(tetel)
  }
}
