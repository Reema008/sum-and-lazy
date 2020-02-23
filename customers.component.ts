import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  obj: any = [];

  constructor() { }

  ngOnInit() {
    console.log('hi');
    this.obj = [
      {
        name: 'P1',
        id:1,
        value: 150
      },
      {
        name: 'P1',
        id:2,
        value: 450
      },
      {
        name: 'P2',
        id:3,
        value: 200
      },
      {
        name: 'P3',
        id:4,
        value: 450
      }
    ];
    const obj2: any = {};
    this.obj.forEach(function (key: any) {
      console.log(obj2,obj2.hasOwnProperty(key.name));
      if (obj2.hasOwnProperty(key.name)) {
        console.log(obj2,obj2[key.name],key.value);
        obj2[key.name] = obj2[key.name] + key.value;
      } else {
        obj2[key.name] = key.value;
      }
    });
    console.log(obj2);

    const obj3 = [];

    for (const prop in obj2) {
      obj3.push({ name: prop, value: obj2[prop] });
    }
    console.log(obj3);

  }

}
