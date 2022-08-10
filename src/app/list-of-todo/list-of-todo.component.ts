import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isEdit:Boolean=false;  
  todo:Todo=new Todo();
  searchText!:string;
  searchTodoList:any;

  formValue!:FormGroup;
  
  constructor(private todoService:TodoService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getAllTodo();
    this.formValue=this.formBuilder.group({
        description:['',Validators.required],
        dateOfCompletion:[''],
        isCompleted:['']
    })
  }

  getAllTodo(){
    this.todoService.retriveAllTodos().subscribe(
      response=>{
        this.todos=response;
        this.isLoading=false;
      }
    )
  }

  saveTodo(){
    this.todo.description=this.formValue.value.description;
    this.todo.isCompleted=this.formValue.value.isCompleted;
    this.todo.userName=window.sessionStorage.getItem('authenticaterUser') as string;

    this.todoService.saveOrUpdateToDo(this.todo).subscribe(response=>{
      console.dir(response);
      this.formValue.reset();
      let closeButton=document.getElementById('close');
      closeButton?.click();
      this.getAllTodo();
    },error=>{
      console.dir(error);
    })
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

  searchTodo(enteredText:string):void{
        this.todos=this.searchTodoList.filter((val:any)=>
        val.description.toLowerCase().includes(enteredText)
      );
    
    
  }
  
}
