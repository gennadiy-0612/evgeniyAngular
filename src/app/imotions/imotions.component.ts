import {Component, OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-imotions',
  templateUrl: './imotions.component.html',
  styleUrls: ['./imotions.component.css']
})
export class ImotionsComponent implements OnInit {
  counter = 0;
  count = 0;
  IsIt: any = 0;
  allTags: NodeListOf<any>;
  ActTag;
  AllSlides: NodeListOf<any>;
  AllSlideCount = 0;
  ActiveSlide;

  constructor() {
  }

  startIt(ChangeIt, ChangeItTwo): void {
    if (!this.IsIt) {
      this.allTags = document.querySelectorAll(ChangeIt);
      this.count = this.allTags.length - 1;
      this.ActTag = this.allTags[0];
      this.AllSlides = document.querySelectorAll(ChangeItTwo);
      this.ActiveSlide = this.AllSlides[0];
      this.AllSlideCount = this.AllSlides.length - 1;
      this.IsIt = 1;
    }
  }

  moveNew(): void {
    this.allTags[this.counter].setAttribute('class', 'active');
    this.AllSlides[this.counter].setAttribute('class', 'slider show');
    this.ActTag = this.allTags[this.counter];
    this.ActiveSlide = this.AllSlides[this.counter];
  }

  back(ChangeIt, NotAct, ChangeItTwo): void {
    this.startIt(ChangeIt, ChangeItTwo);
    this.ActTag.setAttribute('class', NotAct);
    this.ActiveSlide.setAttribute('class', 'slider');
    this.counter > 0 ? this.counter-- : this.counter = this.count;
    this.moveNew();
  }

  forward(ChangeIt, NotAct, ChangeItTwo): void {
    this.startIt(ChangeIt, ChangeItTwo);
    this.ActTag.setAttribute('class', NotAct);
    this.ActiveSlide.setAttribute('class', 'slider');
    this.counter < this.count ? this.counter++ : this.counter = 0;
    this.moveNew();
  }

  indicateChange(ChangeIt: any, NotAct: any, ChangeItTwo: any): void{
    this.startIt(ChangeIt, ChangeItTwo);
    this.ActTag.setAttribute('class', NotAct);
    this.ActiveSlide.setAttribute('class', 'slider');
    this.counter < this.count ? this.counter++ : this.counter = 0;
    console.log(this);
    this.moveNew();
  }

  ngOnInit(): void {
  }

}
