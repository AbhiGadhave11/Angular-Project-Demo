import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

}
