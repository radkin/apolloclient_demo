import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtifacts'
})
export class SearchArtifactsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      const rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    });

  }
}
