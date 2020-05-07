import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista: any[], filtro: string|null): any {
    if(!filtro){
      return lista
    }

    return lista.filter(item => JSON.stringify(item).toLowerCase().indexOf(filtro.toLowerCase()) !== -1)
  
  }

}
