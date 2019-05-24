import { Injectable } from '@angular/core';
import { company } from '../shared/experience';
import { about } from '../shared/about';
import {Companies} from  '../shared/resume';
import {About} from '../shared/home';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor( private http: HttpClient,private processHTTPMsgService: ProcessHttpmsgService ) { }



  getCompanyDetails(): company[] {
    return Companies;
    }

    getAboutDetails(): about[] {
      return About;
      }

    getCompanyDetailsServ(): Observable<company[]> {
      return this.http.get<company[]>(baseURL + 'portfolio').pipe(catchError(this.processHTTPMsgService.handleError));
      }

      getHomeDetailsServ(): Observable<about[]> {
        return this.http.get<about[]>(baseURL + 'Home').pipe(catchError(this.processHTTPMsgService.handleError));
        }

}
