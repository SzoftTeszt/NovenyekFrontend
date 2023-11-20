import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  messages:any={}
  actLang="Magyar"
  keresendo:any=""

  constructor(private config:ConfigService, private search:SearchService){
    this.config.getMessage().subscribe(
      (vnev:any)=> {      
        this.messages=vnev?.nav       
      }
    )
  }


  changeLanguage(lang:any){
    this.actLang=lang.text
    this.config.setLanguage(lang)
  }

setSearch(){
  this.search.setSearch(this.keresendo)
}

}
