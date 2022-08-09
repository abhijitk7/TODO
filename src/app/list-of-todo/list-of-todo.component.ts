import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Todo } from '../models/todo.model';
import { TodoService } from '../service/data/todo.service';

@Component({
  selector: 'app-list-of-todo',
  templateUrl: './list-of-todo.component.html',
  styleUrls: ['./list-of-todo.component.css']
})
export class ListOfTodoComponent implements OnInit {

  todos:Todo[]=[];
  isLoading:Boolean=true;
  isAPIError:Boolean=false;
   /*todos=[
    new Todo(1,"Become expert at Angular",new Date(),false),
    new Todo(2,"Become expert at Kafka",new Date(),false),
    new Todo(3,"Become expert at JavaScript",new Date(),false)
  ];*/

  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.retriveAllTodos().subscribe(
      response=>{
        this.todos=response;
        this.isLoading=false;
      }
    )
  }


  deleteTodo(id:number){
    console.log("Id to be deleted is "+id)

    this.todoService.deleteTodo(id).subscribe(
      response=>{
        const indexOfObject=this.todos.findIndex(function(object){
          return object.id===id;
        })
        
        if(indexOfObject!==-1){
          this.todos.splice(indexOfObject,1);
        }
      },
      error=>{
        this.isAPIError=true;
        console.dir(error);
      })
  }

  
}
