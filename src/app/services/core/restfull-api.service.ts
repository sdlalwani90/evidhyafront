import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { environment as ENV } from '../../../environments/environment';

@Injectable()

export class RestfullApiService {

    private baseUrl = `${ENV.API_URL}`;

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        let token: string = localStorage.getItem('access_token');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
            headers.append('X-Requested-With', 'XMLHttpRequest');
        }
    }

    get(url): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseUrl + url, {
            headers: headers
        }).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    post(url, data): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.baseUrl + url, data, {
            headers: headers
        }).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
    put(url, data): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(this.baseUrl + url, data, {
            headers: headers
        }).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
    delete(url): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.baseUrl + url, {
            headers: headers
        }).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    logout(url): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    posttest(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.baseUrl + url, data, {
            headers: headers
        }).map((res: Response) => res)
            .subscribe(result => {
                console.log(result);
            })
    }

}
