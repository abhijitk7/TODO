import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-list-of-todo',
  templateUrl: './list-of-todo.component.html',
  styleUrls: ['./list-of-todo.component.css']
})
export class ListOfTodoComponent implements OnInit {

   todos=[
    new Todo(1,"Become expert at Angular",new Date(),false),
    new Todo(2,"Become expert at Kafka",new Date(),false),
    new Todo(3,"Become expert at JavaScript",new Date(),false)
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  deleteTodo(id:Number){
    console.log("Id to be deleted is "+id)

    const indexOfObject=this.todos.findIndex(function(object){
      return object.id===id;
    })
    
    if(indexOfObject!==-1){
      this.todos.splice(indexOfObject,1);
    }
    console.dir(this.todos);
  }

  
}
