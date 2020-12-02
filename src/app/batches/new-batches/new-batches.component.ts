import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../../services/core/restfull-api.service';

@Component({
  selector: 'abe-new-batches',
  templateUrl: './new-batches.component.html',
  styleUrls: ['./new-batches.component.scss']
})
export class NewBatchesComponent implements OnInit {
	@ViewChild('emailRef') emailRef: ElementRef;
	datas: any[] = [];
    batches: any[] = [];
	loader: boolean = false;
	@ViewChild('modalValidate') modalValidate: ElementRef;
    @ViewChild('modalSuccess') modalSuccess: ElementRef;
    validatemassages:any[] =[];
	successmassages: any[]=[];
	totalbaches:number=0;
	sorting:number=0;
    serachtxt:any='';
    categories: any[] = [];
    courses: any[] = [];
    subjects: any[] = [];
    faculties:any[] = [];
  	constructor(
        private restfull: RestfullApiService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.getCategories();
        this.getCourses();
        this.getSubjects();
        this.getFaculties();
    }
    showSuccess() {
	    this.toastr.success('Hello world!', 'Toastr fun!');
	}
    public getCourses(){
    	this.restfull.get('/courses').subscribe(result => {
            if(result.success){
                this.courses = result.data;
                this.loader = false;
            }
            else {
                this.courses = [];
                this.loader = false;
            }
        }, error => {
                this.loader = false;
                let x='Error on courses List.';
                if(error.message){
                    x=error.message;
                }else if(error.reason){
                    x=error.reason;
                }
                //this.getValidationMsg({ reason: { name: [x] } });
                this.toastr.error(x);
        });
    }
    public getCategories(){
    	this.restfull.get('/categories').subscribe(result => {
            if(result.success){
                this.categories = result.data;
                this.loader = false;
            }
            else {
                this.categories = [];
                this.loader = false;
            }
        }, error => {
                this.loader = false;
                let x='Error on categories List.';
                if(error.message){
                    x=error.message;
                }else if(error.reason){
                    x=error.reason;
                }
                //this.getValidationMsg({ reason: { name: [x] } });
                this.toastr.error(x);
        });
    }
    public getSubjects(){
    	this.restfull.get('/subjects').subscribe(result => {
            if(result.success){
                this.subjects = result.data;
                this.loader = false;
            }
            else {
                this.subjects = [];
                this.loader = false;
            }
        }, error => {
                this.loader = false;
                let x='Error on subjects List.';
                if(error.message){
                    x=error.message;
                }else if(error.reason){
                    x=error.reason;
                }
                //this.getValidationMsg({ reason: { name: [x] } });
                this.toastr.error(x);
        });
    }
    public getFaculties(){
    	this.restfull.get('/faculties').subscribe(result => {
            if(result.success){
                this.faculties = result.data;
                this.loader = false;
            }
            else {
                this.faculties = [];
                this.loader = false;
            }
        }, error => {
                this.loader = false;
                let x='Error on faculties List.';
                if(error.message){
                    x=error.message;
                }else if(error.reason){
                    x=error.reason;
                }
                this.toastr.error(x);
                //this.getValidationMsg({ reason: { name: [x] } });
        });
    }
    getValidationMsg(error) {
        this.validatemassages = [];
        Object.keys(error.errors).forEach((key) => {
            this.validatemassages.push(error.errors[key][0]);
        });
        if (this.validatemassages.length !== 0) this.modalValidate.nativeElement.click();
    }
    getSuccessMsg(error) {
        this.successmassages = [];
        Object.keys(error.reason).forEach((key) => {
            this.successmassages.push(error.reason[key][0]);
        });
        if (this.successmassages.length != 0) this.modalSuccess.nativeElement.click();
    }
    public onSubmit(data){
    	console.log(data);
    	data.code='sd';
    	data.is_active=0;
    	this.loader=true;
    	this.restfull.post('/batches', data).subscribe(result => {
    		this.toastr.success('Success', 'Batch created successfully.');
            this.router.navigate(['batches']);
        }, error => {
            this.loader = false;
            console.log(error);
            this.getValidationMsg(error);
        });
    }
}
