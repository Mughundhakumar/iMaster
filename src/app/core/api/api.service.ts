import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getObject(url: any, id: any): Observable<any> {
    return this.httpClient.get(environment.serverUrl + url + '/' + `${id}`)
      .pipe(catchError(this.handleError));
  }

  getAllObjects(url: any): Observable<any> {
    return this.httpClient.get(environment.serverUrl + url)
      .pipe(catchError(this.handleError));
  }

  save(url: any, objectBody: any): Observable<any> {
    const requestData = JSON.stringify(objectBody);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
    };
    return this.httpClient.post(environment.serverUrl + url, requestData, httpOptions)
      .pipe(catchError(this.handleError));
  }

  update(url: any, objectBody: any): Observable<any> {
    const requestData = JSON.stringify(objectBody);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
    };
    return this.httpClient.put(environment.serverUrl + url, requestData, httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete(url: any, id: any): Observable<any> {
    return this.httpClient.delete(environment.serverUrl + url + '/' + `${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error as any;
      errorMessage = body.description ? body.description : body.errorMessage;
    } else {
      const body = error;
      if (body.error) {
        errorMessage = body.error.errorMessage;
      } else {
        errorMessage = error.message ? error.message : error.toString();
      }
    }
    return throwError(errorMessage);
  }

}
