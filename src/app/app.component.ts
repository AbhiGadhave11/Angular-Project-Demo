import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public str = "Marvellous";
  title = 'Binding1';
  public value :any; 
  public Send(data:any)
  {
    this.value = data;
  }
}
