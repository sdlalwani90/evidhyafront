import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../../services/core/restfull-api.service';

@Component({
  selector: 'abe-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {
	public category: BatchInterface = {};
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
    id:number=0;
  	constructor(
        private restfull: RestfullApiService,
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute) { }

    ngOnInit() {
    	this.getbatch();
    }
    public getbatch(){
    	this.loader=true;
    	this.route.params.subscribe((params) => {
            this.id = params['id'];
            if(this.id>0){
            	this.restfull.get('/categories/'+this.id).subscribe(result => {
		            if(result.success){
		                this.datas = result.data;
		                this.category.name=result.data.name;
		                this.loader=false;
		            }
		            else {
		            	this.loader=false;
		                this.datas = [];
		                let x='Data Not Found.';
		                this.toastr.error(x);
		                this.router.navigate(['categories/']);
		            }
		        }, error => {
		        		this.loader = false;
		                let x='Error on geting category data.';
		                if(error.message){
		                    x=error.message;
		                }else if(error.reason){
		                    x=error.reason;
		                }
		                //this.getValidationMsg({ reason: { name: [x] } });
		                this.toastr.error(x);
		                this.router.navigate(['categories/']);
		        });
            }else{
            	this.loader=false;
        		this.router.navigate(['categories/']);
        	}
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
    	this.loader=true;
    	this.restfull.put('/categories/'+this.id, data).subscribe(result => {
    		this.toastr.success('Success', 'Batch updated successfully.');
            this.router.navigate(['categories']);
        }, error => {
            this.loader = false;
            let x='Error on updating category.';
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
export interface BatchInterface {
    name?: string;
}