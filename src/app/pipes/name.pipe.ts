import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): string {
    let firstName = value.substr(0,1).toUpperCase() + value.substr(1,);
    let lastName = value.substr(0,1).toUpperCase() + value.substr(1,);
    return firstName ; lastName;

  
  }
}
