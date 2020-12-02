import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';

import { environment as ENV } from '../../../environments/environment';

@Injectable()

export class TokenService {

    private oauthUrl = `${ENV.AUTH_URL}`;

    constructor(private http: Http) { }

    getCredential(value) {
        let headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        let data = {
            //grant_type: "password",
            //client_id: '1',
            //client_secret: "UC5K0XHIYxSBWRYCsQ5KjdMt887GbmZq2V9bAyey",
            email: value.username,
            password: value.password,
            //scope: ""
        }
        return this.http.post(this.oauthUrl, data, {

            headers: headers
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

}
