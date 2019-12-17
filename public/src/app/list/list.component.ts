import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _http : HttpService;
  public pets : Array<any> = [];

  constructor(http: HttpService) { 
    this._http = http;
  }

  ngOnInit() : void {
    const petObservable : Observable<any> = this._http.getPetting();
    petObservable.subscribe(res => {
      this.pets = res;
    });
  }

}
