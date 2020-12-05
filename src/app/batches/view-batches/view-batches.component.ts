import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../../services/core/restfull-api.service';

@Component({
  selector: 'abe-view-batches',
  templateUrl: './view-batches.component.html',
  styleUrls: ['./view-batches.component.scss']
})
export class ViewBatchesComponent implements OnInit {
	datas: any[] = [];
    batches: any[] = [];
	loader: boolean = false;
	@ViewChild('modalOn') private modalOn: ElementRef;
    @ViewChild('modalOff') private modalOff: ElementRef;
    @ViewChild('emailRef') emailRef: ElementRef;
	@ViewChild('modalValidate') modalValidate: ElementRef;
    @ViewChild('modalSuccess') modalSuccess: ElementRef;
    validatemassages:any[] =[];
	successmassages: any[]=[];
	totalbaches:number=0;
	sorting:number=0;
	id:number=0;
	stype:string='';
    serachtxt:any='';
    categories: any[] = [];
    courses: any[] = [];
    subjects: any[] = [];
    faculties:any[] = [];
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
            this.stype=params['type'];
            console.log(this.stype);
            if(this.id>0){
            	if(this.stype=='overview'){
            		this.restfull.get('/batches/'+this.id).subscribe(result => {
			            if(result.success){
			                this.datas = result.data;
			                this.loader=false;
			            }
			            else {
			            	this.loader=false;
			                this.datas = [];
			                let x='Data Not Found.';
			                this.toastr.error(x);
			                this.router.navigate(['batches']);
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
			                this.router.navigate(['batches']);
			        });	
            	}else if(this.stype=='attendance'){

            	}else if(this.stype=='students'){

            	}else if(this.stype=='assignments'){

            	}else if(this.stype=='announcements'){

            	}else if(this.stype=='tests'){

            	}else if(this.stype=='videos'){

            	}else if(this.stype=='liveclasses'){

                }else if(this.stype=='studymaterial'){

            	}else if(this.stype=='settings'){

                }else{
                    this.router.navigate(['batches']);
                }
            }else{
            	this.loader=false;
        		this.router.navigate(['batches']);
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
    public editbatch() {
        this.router.navigate(['batch/update/'+this.id]);
    }
    public deletebatch() {
        this.modalOn.nativeElement.click();
    }
    public Yes() {
    	this.loader = true;
        this.restfull.delete('/batches/' + this.id)
        .subscribe(result => {
        	this.loader = false;
            let x='Batch deleted successfully.';
            if(result.message){
            	x=result.message;
            }
            this.toastr.success(x);
            this.router.navigate(['batches']);
        }, error => {
        	this.loader = false;
            let x='Error on deleting this batch.';
            if(error.message){
                x=error.message;
            }else if(error.reason){
                x=error.reason;
            }
            this.toastr.error(x);
        });
    
    }
    public No() {
        this.modalOff.nativeElement.click();
    }
    public opensite(id){
    	this.datas = [];
    	this.router.navigate(['batch/'+this.id+'/'+id]);	
    }
}
