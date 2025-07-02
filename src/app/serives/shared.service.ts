import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public sidebar$ = new BehaviorSubject<any>({isExpanded: true,isMobile: false});
  public currentPageMeta$ = new BehaviorSubject<any>({
    label: null,
    icon: null
  });  
  constructor() { }
}
