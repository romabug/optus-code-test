import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BarsData } from '../models/dataModel';


@Injectable({
    providedIn: 'root'
})
export class ProgressBarService {

    constructor(private  http: HttpClient) {

    }


    progressBarData(): Observable<BarsData> {
        return this.http.get<BarsData>('http://pb-api.herokuapp.com/bars');
    }




}
