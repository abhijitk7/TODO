import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

 /* transform(items: any[], filterQuery: any): Todo[] {
    if(!filterQuery) return items;
    return items.filter((item)=>{
      item.description.toLowerCase().includes(filterQuery.toLowerCase())
    });
  }*/

  transform(items: any[], filterQuery: any): any[] {
    if (!filterQuery) return items;
    return items.filter((item) =>
      item.description.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }

}
