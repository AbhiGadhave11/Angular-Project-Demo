import { Component, Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-mycomp-child',
  templateUrl: './mycomp-child.component.html',
  styleUrls: ['./mycomp-child.component.css']
})
export class MycompChildComponent {
  @Input() name = ['Abhi'];    
  
  
}




