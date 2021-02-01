import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  list = []

  constructor() { }

  private contentList = new BehaviorSubject(this.list);
  public shareList = this.contentList.asObservable();
  updateList(list) {
    this.contentList.next(list)
  }
}
