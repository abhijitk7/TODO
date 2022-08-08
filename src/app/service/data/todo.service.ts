import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo.model';
import { API_URL } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(){
    
    return this.http.get<Todo[]>(`${API_URL}/api/todo`);
  }

  deleteTodo(id:number){
    return this.http.delete<Todo[]>(`${API_URL}/api/todo/${id}`)
  }
}
