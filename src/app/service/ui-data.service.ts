import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfgError } from '../ui/ui.component';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OfgDataService {

  constructor(private http : HttpClient) { }

  getAllOfgErrors(){
    return this.http.get<OfgError[]>(environment.httpUrl+'getOfgErros');
  }

  getOfgErrorOnOrderID(orderId){
    return this.http.get<OfgError[]>(environment.httpUrl+`getOfgErrorOnOrderID/${orderId}`);
  }
}
