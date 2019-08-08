import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='login'
    }

    login(data : any)    {
            return this.post('',data,this.COMMON_JSON_HEADER_REQUEST);
    }
}