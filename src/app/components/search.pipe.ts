import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    console.log(filterString);
 
    if(filterString == '' || filterString == null){
      return value;
    }
 
    const allbook =[]
    for (const book of value){
    if(book.bookName.toLowerCase().includes(filterString) || book.bookName.toUpperCase().includes(filterString) || book.description.toLowerCase().includes(filterString) 
      || book.author.toLowerCase().includes(filterString) || book.description.toUpperCase().includes(filterString)){
       allbook.push(book);
     }
    }
    return allbook;
   }
 
 }