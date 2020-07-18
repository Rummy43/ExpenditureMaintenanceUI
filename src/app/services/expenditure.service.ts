import { Injectable } from '@angular/core';
import {Expenditure} from '../model/expenditure'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {

  private app_url='http://localhost:8080';

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(this.app_url+"/getAllExpenditures");
  }

  public delete(id:number){
    return this.http.get(this.app_url+"/delete?id="+id,{responseType: 'text'});
  }
}
