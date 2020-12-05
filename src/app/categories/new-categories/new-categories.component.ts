import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../../services/core/restfull-api.service';

@Component({
  selector: 'abe-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.scss']
})
export class NewCategoriesComponent implements OnInit {

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
    	this.loader=true;
    	this.restfull.post('/categories', data).subscribe(result => {
    		this.toastr.success('Category created successfully.', 'Success');
            this.router.navigate(['categories']);
        }, error => {
            this.loader = false;
            let x='Error on creating category.';
            if(error.errors){
                x=error.errors;
                this.getValidationMsg(error);
            }else if(error.message){
                x=error.message;
                this.toastr.error(x);
            }else{
            	this.toastr.error(x);
            }
        });
    }
    public back(){
        this.router.navigate(['categories']);
    }
}
