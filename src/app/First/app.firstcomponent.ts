import { Component } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.firstcomponent.html',
  styleUrls: ['./app.firstcomponent.css']
})
export class AppFirstComponent {
  public todos:Todo[] = [];
  public title: String = 'Minhas tarefas';
  public form: FormGroup;
  public mode = 'list';


  constructor(private fb: FormBuilder) {
    this.load();
    this.form = this.fb.group(
      {title:['',
        Validators.compose([Validators.maxLength(100), 
        Validators.minLength(5),
        Validators.required,
      ])]}
    );
  }
  
 save(){
   
   const data = JSON.stringify(this.todos);
   localStorage.setItem('todos',data);
   this.mode = 'list';
 }
 load(){
   const data = localStorage.getItem('todos');
   if (data) {
    this.todos = JSON.parse(data);
   }
   else
   {
     this.todos = [];
   }
   
 }
  
  add()
  {
    const title = this.form.controls["title"].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }
  clear()
  {
    this.form.reset();
  }
  remove(todo: Todo)
  {
     const index = this.todos.indexOf(todo);
     if(index !== -1)
     {
       this.todos.splice(index, 1);
     }
     this.save();
  }

  markAsDone(todo:Todo)
  {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo:Todo)
  {
    todo.done = false;
    this.save();
  }

  changeMode(mode: string)
  {
    this.mode = mode;
  }
}
