import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageMeta } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public currentPageMeta$ = new BehaviorSubject<PageMeta>({
    label: null,
    icon: null
  });  
  constructor() { }
}
