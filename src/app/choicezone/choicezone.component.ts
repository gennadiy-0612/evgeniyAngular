import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-choicezone',
  templateUrl: './choicezone.component.html',
  styleUrls: ['./choicezone.component.css']
})
export class ChoicezoneComponent implements OnInit {
  auto = 'active';
  mech = '';

  showAuto(SelectorAuto): void {
    document.querySelector('.techno.auto').setAttribute('class', 'techno auto ' + SelectorAuto);
    document.querySelector('.techno.mech').setAttribute('class', 'techno mech hide');
  }

  showMech(SelectorMach): void {
    document.querySelector('.techno.auto').setAttribute('class', 'techno auto hide');
    document.querySelector('.techno.mech').setAttribute('class', 'techno mech ' + SelectorMach);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
