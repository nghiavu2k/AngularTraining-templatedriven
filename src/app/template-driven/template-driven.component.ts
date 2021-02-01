import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../hero';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent implements OnInit {

  @Input() childData

  ngOnChanges(changes: SimpleChanges) {
    if (this.childData) {
      this.hero.id = changes.childData.currentValue.id;
      this.hero.name = changes.childData.currentValue.name;
      this.hero.age = changes.childData.currentValue.age;
      this.hero.address = changes.childData.currentValue.address;
      this.hero.email = changes.childData.currentValue.email;
      this.hero.career = changes.childData.currentValue.career;
      this.hero.hobby = changes.childData.currentValue.hobby;
    };
  }

  @Output()
  output = new EventEmitter<Hero>()

  constructor() { }

  ngOnInit(): void {
  }

  careers = ['a', 'b', 'c'];
  hobbies = ['1', '2', '3'];

  hero: Hero = {
    id: null,
    name: null,
    age: null,
    address: null,
    email: null,
    career: null,
    hobby: null
  };

  saveH() {
    let newHero: Hero = {
      id: this.hero.id,
      name: this.hero.name,
      age: this.hero.age,
      address: this.hero.address,
      email: this.hero.email,
      career: this.hero.career,
      hobby: this.hero.hobby
    }
    this.output.emit(newHero)
  }


}
