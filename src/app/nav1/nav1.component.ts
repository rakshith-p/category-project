import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {convertActionBinding} from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.scss']
})
export class Nav1Component implements OnInit {
  name: string;
  contact: string;
  country: string;
  opened = false;

  categorie_array = [
    {
      name: 'something1',
      seq: 1,
    },
    {
      name: 'something2',
      seq: 2,
    },
    {
      name: 'something3',
      seq: 3
    }
  ];

  constructor() {
  }

  dropTest(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categorie_array, event.previousIndex, event.currentIndex);
  }

  add() {
    this.categorie_array.push({
      name: this.name,
      seq: this.categorie_array.length + 1,

    });
    this.opened = false;
    this.name = '';
  }

  delete(item) {
    for (let i = 0; i < this.categorie_array.length; i++) {
      if (this.categorie_array[i].name === item.name) {
        this.categorie_array.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

}
