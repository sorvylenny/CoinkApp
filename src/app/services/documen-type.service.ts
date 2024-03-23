import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Document } from '../interface/document';

@Injectable({
  providedIn: 'root'
})
export class DocumenTypeService {

  private baseUrl: string = environment.BasePortalOutlet

  constructor(private http: HttpClient) { }

  typeDocument():Observable<Document[]>{
    return this.http.get<Document[]>(this.baseUrl);
  }
}
