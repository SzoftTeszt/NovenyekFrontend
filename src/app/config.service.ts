import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  constructor(private http:HttpClient) {
    this.loadMessage('hu')
   }

  private messageSubject=new BehaviorSubject({})

  getMessage(){
   return this.messageSubject
  }

  setLanguage(lang:any){
    this.loadMessage(lang.sign)
  }

  private loadMessage(lang:any){
    this.http.get('../assets/lang_'+lang+'.json').subscribe(
      (res:any)=>this.messageSubject.next(res)
    )
  }

}
