import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(novenyek:any, nev:any): any {
    if (!novenyek) return novenyek
    if (!nev || nev.length==0) {
      // console.log("vissza üres")
      return novenyek}
    
    // console.log(novenyek)
    return novenyek.filter(
      (sor:any)=> {
        // console.log("sor",sor.megnevezes)
        // console.log("nev",nev)
        return sor.megnevezes.toLowerCase().includes(nev.toLowerCase())
      }
    )
  }

}
