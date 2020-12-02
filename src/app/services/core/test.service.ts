import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class TestService {

    private subject = new Subject<any>();

    constructor() { }

    private _navItemSource = new BehaviorSubject<any>(0);

    navItem$ = this._navItemSource.asObservable();

    changeNav(any) {
        this._navItemSource.next(any);
    }

    sendMessage(message: any) {
        this.subject.next(message);
    }

    clearMessage() {
        this.subject.next();
    }
    
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}