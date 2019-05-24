import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiURL } from '../shared/baseurl';
import { Message } from '../shared/message';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SendemailService {

   responsemsg:string;
   apiUrl = environment.apiURL;


  constructor(private http: HttpClient,
   private processHTTPMsgService: ProcessHttpmsgService) { }


  sendEmailfn(emailDet: Message): Observable<any> {


   const httpOptions = {
      headers: new HttpHeaders ( {
        'Content-Type':'application/json',
      })
    };
  
   return this.http.put<any>(this.apiUrl + 'sendEmail/', emailDet, httpOptions).pipe(catchError(this.processHTTPMsgService.handleError));
   }
}