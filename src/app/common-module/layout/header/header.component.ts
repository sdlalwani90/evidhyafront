import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { RestfullApiService } from '../../../services/core/restfull-api.service';
import { TestService } from '../../../services/core/test.service';
import { environment as ENV } from '../../../../environments/environment';
@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('modalLocation') private modalLocation: ElementRef;
    @ViewChild('modalCloseLocation') private modalCloseLocation: ElementRef;
    public routes: any[] = []
    public topthree: any[] = [];
    public subscription: Subscription;
    public username: string;
    private logoutUrl = `${ENV.LOGOUT_URL}`;
    public locationsArr: any[]=[];
    public selectedLocation: any[]=[];
    public selectedDepartment: any[]=[];
    public departmentArr: any[]=[];
    public allSelected:boolean;
    public location_name: string;
    public department_name: string;
    public openpage:any;
    constructor(
        private restfull: RestfullApiService,
        private test: TestService,
        private http: Http,
        private router: Router) { }
        

    ngOnInit() {
    	this.openpage=this.router.url;
    	this.checkAuthoeised();
        this.getUserName();
        this.routes = JSON.parse(localStorage.getItem('route'));
    }
    checkAuthoeised() {
    	if (localStorage.getItem('access_token') === null || localStorage.getItem('access_token') == '') {
            this.router.navigate(['/']);
        }
    }
    getUserName() {
    	this.username = localStorage.getItem('user_name');
    	//this.username = localStorage.getItem('username');
        /*this.restfull.get('/user').subscribe(result => {
            console.log(result);
            this.username =result.name;
        }, error => {
        	let x='Please contact support team.';
            if(error.message){
                x=error.message;
            }else if(error.reason){
                x=error.reason;
            }
            //this.router.navigate(['/']);
            //this.getValidationMsg({ reason: { name: [x] } });
        });*/
    }
    public logOut(){
    	localStorage.clear();
    	this.router.navigate(['/']);
    	window.location.reload();
    }
    public pagecall(id){
    	this.router.navigate(['/'+id]);
    }
}
