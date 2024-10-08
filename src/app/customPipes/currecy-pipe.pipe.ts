import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currecyPipe'
})
export class CurrecyPipePipe implements PipeTransform {

  transform(value: string | null): string | null {
    // console.log(value);
    if(value!=null)
     return value.slice(1)+value.charAt(0)
    else
    return value;
   }

}
