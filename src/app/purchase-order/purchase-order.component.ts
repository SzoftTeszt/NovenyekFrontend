import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KosarService } from '../kosar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent {
aszf=false
nev=""
cim=""
uzenet=""
tetelek:any

constructor(
  private kosar:KosarService,
  private base:BaseService,
  private router:Router
)
{
  this.kosar.getKosarban().subscribe(
    (a)=> this.tetelek=a
  )
}

addOrder(){
let body:any={}

body.nev=this.nev
body.cim=this.cim
body.uzenet=this.uzenet
body.tetelek=this.tetelek
body.status="Felvéve"
console.log("body",body)
this.base.addOrder(body).subscribe(
  ()=>{
    console.log("Sikeres megredendelés!")
    this.router.navigate(['/home'])
  }
)

}
}
