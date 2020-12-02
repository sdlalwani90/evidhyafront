import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RestfullApiService } from '../services/core/restfull-api.service';

@Component({
  selector: 'abe-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnInit {
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
  constructor(
        private restfull: RestfullApiService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.getDataList();
    }
    public getDataList() {
    	this.loader = true;
        this.restfull.get('/batches').subscribe(result => {
            if(result.success){
                this.datas = result.data;
                this.batches = result.data;
                this.totalbaches=result.data.length;
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
    public batch_sort(id){
        if(id==1){
            this.datas.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            });
            this.sorting=1;
        }
        else if(id==2){
            this.datas.sort((a, b) => {
              if (b.name > a.name) {
                return 1;
              }
              if (b.name < a.name) {
                return -1;
              }
              return 0;
            });
            this.sorting=2;
        }
        else if(id==3){
            this.datas.sort((a, b) => {
              return <any>new Date(a.created_at) - <any>new Date(b.created_at);
            });
            this.sorting=3;
        }
        else if(id==4){
            this.datas.sort((a, b) => {
              return <any>new Date(b.created_at) - <any>new Date(a.created_at);
            });
            this.sorting=4;
        }else{
            this.sorting=0;
        }
    }
    public claerserach(){
        this.serachtxt='';
    }
    public newbatch(){
        this.router.navigate(['/batch/new']);
    }
    public viewbatch(id){
        this.router.navigate(['/batch/'+id]);
    }
}
