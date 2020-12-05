import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../../services/core/restfull-api.service';

@Component({
  selector: 'abe-edit-batches',
  templateUrl: './edit-batches.component.html',
  styleUrls: ['./edit-batches.component.scss']
})
export class EditBatchesComponent implements OnInit {
	public batch: BatchInterface = {};
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
        this.getCategories();
        this.getCourses();
        this.getSubjects();
        this.getFaculties();
    }
    public getbatch(){
    	this.loader=true;
    	this.route.params.subscribe((params) => {
            this.id = params['id'];
            if(this.id>0){
            	this.restfull.get('/batches/'+this.id).subscribe(result => {
		            if(result.success){
		                this.datas = result.data;
		                this.batch.name=result.data.name;
		                this.batch.divison=result.data.divison;
		                this.batch.category_id=result.data.category_id;
		                this.batch.course_id=result.data.course_id;
		                this.batch.subject_ids=[1,2];
		                this.batch.faculty_ids=[1];
		                this.loader=false;
		            }
		            else {
		            	this.loader=false;
		                this.datas = [];
		                let x='Data Not Found.';
		                this.toastr.error(x);
		                this.router.navigate(['batch/'+this.id+'/overview']);
		            }
		        }, error => {
		        		this.loader = false;
		                let x='Error on geting batch data.';
		                if(error.message){
		                    x=error.message;
		                }else if(error.reason){
		                    x=error.reason;
		                }
		                //this.getValidationMsg({ reason: { name: [x] } });
		                this.toastr.error(x);
		                this.router.navigate(['batch/'+this.id+'/overview']);
		        });
            }else{
            	this.loader=false;
        		this.router.navigate(['batch/'+this.id+'/overview']);
        	}
        });
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
    	this.loader=true;
    	this.restfull.put('/batches/'+this.id, data).subscribe(result => {
    		this.toastr.success('Success', 'Batch updated successfully.');
            this.router.navigate(['batch/'+this.id+'/overview']);
        }, error => {
            this.loader = false;
            let x='Error on updating batch.';
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
        this.router.navigate(['batch/'+this.id+'/overview']);
    }
}
export interface BatchInterface {
    name?: string;
    divison?:string;
    category_id?:number;
    course_id?:number;
    subject_ids?:any;
    faculty_ids?:any;
}