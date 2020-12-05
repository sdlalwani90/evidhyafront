import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../services/core/restfull-api.service';

@Component({
  selector: 'abe-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    @ViewChild('modalOn') private modalOn: ElementRef;
    @ViewChild('modalOff') private modalOff: ElementRef;
    @ViewChild('emailRef') emailRef: ElementRef;
	datas: any[] = [];
    batches: any[] = [];
	loader: boolean = false;
	@ViewChild('modalValidate') modalValidate: ElementRef;
    @ViewChild('modalSuccess') modalSuccess: ElementRef;
    validatemassages:any[] =[];
	successmassages: any[]=[];
	total:number=0;
	sorting:number=0;
	delete_id:number=0;
    serachtxt:any='';
  constructor(
        private restfull: RestfullApiService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.getDataList();
    }
    public getDataList() {
    	this.loader = true;
        this.restfull.get('/categories').subscribe(result => {
            if(result.success){
                this.datas = result.data;
                this.total=result.data.length;
                this.loader = false;
            }
            else {
                this.datas = [];
                this.loader = false;
            }
            //this.getPermission();
        }, error => {
                this.loader = false;
                let x='Error on batches List.';
                if(error.message){
                    x=error.message;
                }else if(error.reason){
                    x=error.reason;
                }
                this.toastr.error(x);
                //this.getValidationMsg({ reason: { name: [x] } });
        });
    }

    public refresh() {
        this.datas = [];
        this.loader = true;
        this.getDataList();
    }
    getValidationMsg(error) {
        this.validatemassages = [];
        Object.keys(error.reason).forEach((key) => {
            this.validatemassages.push(error.reason[key][0]);
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
    public claerserach(){
        this.serachtxt='';
    }
    public newbatch(){
        this.router.navigate(['/category/new']);
    }
    public editcategory(id){
        this.router.navigate(['/category/update/'+id]);
    }
    public deletecategory(id) {
    	this.delete_id=id;
        this.modalOn.nativeElement.click();
    }
    public Yes() {
    	if(this.delete_id){
    		this.loader = true;
	        this.restfull.delete('/categories/' + this.delete_id)
	        .subscribe(result => {
	        	this.loader = false;
	            let x='Category deleted successfully.';
	            if(result.message){
	            	x=result.message;
	            }
	            this.toastr.success(x);
	            this.refresh();
	        }, error => {
	        	this.loader = false;
	            let x='Error on deleting this Category.';
	            if(error.message){
	                x=error.message;
	            }else if(error.reason){
	                x=error.reason;
	            }
	            this.toastr.error(x);
	        });	
    	}
    }
    public No() {
        this.modalOff.nativeElement.click();
    }
}
