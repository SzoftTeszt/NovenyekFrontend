import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:"porder", component:PurchaseOrderComponent, pathMatch:'full'},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
