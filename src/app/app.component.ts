import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskstodo';
  arr:any=[];
  tt:any;
  num:number=0;
  fun()
  {
    this.arr.push({Sno:this.num++,task:this.tt});
  }
  fun1(index:any)
  {
     this.arr.splice(index,1)   
     this.num=0;
     for( let a in this.arr)
     {
       this.arr[a].Sno=this.num++;
     }
  }
}
