import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../services/core/token.service';
import { RestfullApiService } from '../services/core/restfull-api.service';
import { environment as ENV } from './../../environments/environment';

@Component({
  selector: 'abe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @ViewChild('modalValidate') modalValidate: ElementRef;
    public validatemassages: any[] = [];
    public token: string;
    private loginUrl = `${ENV.LOGIN_URL}`;
    public loader: any = false;
    constructor(
        private service: TokenService,
        private restfull: RestfullApiService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.token = localStorage.getItem('access_token');
        if (this.token) {
            this.router.navigate(['batches']);
        }
    }
    getValidationMsg(error) {
    	this.validatemassages = [];
        Object.keys(error.errors).forEach((key) => {
            this.validatemassages.push(error.errors[key][0]);
        });
        console.log(this.validatemassages);
        console.log(this.validatemassages.length);
        if (this.validatemassages.length !== 0){
        	this.modalValidate.nativeElement.click();
        } 
    }
    login(value) {
    	this.loader = true;
    	this.service.getCredential(value).subscribe(data => {
            localStorage.setItem('access_token', data.token);
            localStorage.setItem('user_id', data.user.id);
            localStorage.setItem('user_name', data.user.name);
            localStorage.setItem('email', data.user.email);
            this.router.navigate(['batches']);
            this.loader = false;
        }, error => {
        	this.loader = false;
            let x='Please contact support team.';
            if(error.message){
                x=error.message;
            }else if(error.reason){
                x=error.reason;
            }
            this.toastr.error(x);
            //this.getValidationMsg({ reason: { name: [x] } });
        });

    }

    
    
}
