import { Component, OnInit, Compiler, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { mapTo } from 'rxjs/operators';
import { RestfullApiService } from './services/core/restfull-api.service';
import { TestService } from './services/core/test.service';
@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	@ViewChild('modalValidate') modalValidate: ElementRef;
    loadAPI: Promise<any>;
    online$: Observable<boolean>;
    place: any = "";
    offline: boolean = false;
    validatemassages: any[] = [];
    constructor(
        private restfull: RestfullApiService,
        private router: Router,
        private test: TestService,
        private _compiler: Compiler) {
        this._compiler.clearCache();
        this.online$ = Observable.merge(
            of(navigator.onLine),
            Observable.fromEvent(window, 'online').pipe(mapTo(true)),
            Observable.fromEvent(window, 'offline').pipe(mapTo(false))
        )
        this.online$.subscribe(value => {
            this.checkNet(!value);
        })
        this.test.getMessage().subscribe(message => {
            this.modalValidate.nativeElement.click();
            this.validatemassages = message;
        });
    }
    checkNet(check) {
        if (check) {
            setTimeout(() => {
                if (document.getElementById("something") !== null) {
                    document.getElementById("something").style["top"] = "18px";
                    this.offline = true;
                }
            }, 5000);
        } else {
            setTimeout(() => {
                if (document.getElementById("something") !== null) {
                    document.getElementById("something").style["top"] = "0px";
                    this.offline = false;
                }
            }, 5000);
        }

    }

    
    ngOnInit() {
        this.checkLoggedIn();
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    public checkLoggedIn() {
        if (localStorage.getItem("access_token") === null) {
            this.router.navigate(['/']);
        }
    }
}
