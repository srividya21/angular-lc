import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablefilter'
})
export class TablefilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
  

    return value ? list.filter(item => item.gender === value) : list;
  }

}
