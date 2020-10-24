import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'oliiii';
  edad = '22';
  power = 2;
  items = ['Gustavo', 'yesika', 'rubén'];

  constructor() { }

  // tslint:disable-next-line: typedef
  addItem() {
    this.items.push('Nuevo Item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
