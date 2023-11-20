import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(novenyek:any, nev:any): any {
    // console.log("Nev", nev)
    if (!novenyek) return novenyek
    if (!nev) {
      // console.log("vissza üres")
      return novenyek}
    
    // console.log(novenyek)
    return novenyek.filter(
      (sor:any)=> {
        // console.log("sor",sor.megnevezes)
        // console.log("nev",nev)
        return String(sor.megnevezes).toLowerCase().includes(String(nev).toLowerCase())
      }
    )
  }

}
