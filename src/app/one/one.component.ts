import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  bool: boolean;
  Count1: number;
  Count2: number;
  constructor() {
    this.bool = true;
    this.Count1 = 0;
    this.Count2 = 0;
  }

  onClick() {
    this.bool = !this.bool;
  }
  Add1() {
    this.Count1++;
  }
  Add2() {
    this.Count2++;
  }
  Sub() {
    this.Count2--;
  }

  ngOnInit(): void {
  }

}
