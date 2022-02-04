import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

import { FileDetails } from '../models/files.model';

@Injectable()
export class ApiService {
  apiBaseUrl = "http://localhost:3000/"
  constructor(
    protected http: HttpClient
  ){

  }

  public getFiles(): Observable<FileDetails> {
    return this.http.get<FileDetails>(this.apiBaseUrl);
  }

  // public getFilesByPath(path: string): Observable<FileDetails> {
  //   let params = new HttpParams();
  //   params = params.append("path", path);
  //   return this.http.get<FileDetails>(this.apiBaseUrl + 'files', {params: params});
  // }

}
