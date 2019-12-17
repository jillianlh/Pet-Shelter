import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient) { 
    this._httpClient = httpClient;
  }

  getPetting() : Observable<any> {
    return this._httpClient.get("/pets");
  }

  getOnePet(_id : string) : Observable<any> {
    return this._httpClient.get(`/pets/${_id}`);
  }

  getPlanning(pet : any) : Observable<any> {
    return this._httpClient.post("/pets", pet);
  }

  getEditing(_id, pet) {
    return this._httpClient.put(`/edit/${_id}`, pet);
  }

  unPet(_id : string) : Observable<any> {
    return this._httpClient.delete(`/pets/${_id}`);
  }

  like(_id, pet) : Observable<any> {
    return this._httpClient.put(`/pets/${_id}`, pet);
  }

}
