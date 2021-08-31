import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-choicezone',
  templateUrl: './choicezone.component.html',
  styleUrls: ['./choicezone.component.css']
})
export class ChoicezoneComponent implements OnInit {
  AutoActive = '';
  autoDetailAct: string;
  TechActive = '';
  techDetailAct: string;

  showAuto(SelectorAuto): void {
    this.AutoActive = SelectorAuto;
    this.TechActive = 'Choice NotActive ';
    this.autoDetailAct = 'ShowTechDetail';
    this.techDetailAct = 'HideTechDetail';
  }

  showTech(SelectorAuto): void {
    this.TechActive = SelectorAuto;
    this.AutoActive = 'Choice NotActive ';
    this.techDetailAct = 'ShowTechDetail';
    this.autoDetailAct = 'HideAutoDetail';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
