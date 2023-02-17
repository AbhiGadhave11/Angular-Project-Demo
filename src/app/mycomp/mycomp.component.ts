import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent {
    fsname = ['Kailas','Gadhave'];
    fname = "Kailas";
    lname = "Gadhave";
    arr = [10,20,30,40,50];

  items = ['item1'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
