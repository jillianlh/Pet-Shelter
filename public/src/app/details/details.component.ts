import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public pet : any = {};
  public pet_id : string = "";
  public isLiked = false;

  constructor(httpService : HttpService, route : ActivatedRoute, router : Router) { 
    this._httpService = httpService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe((params : Params) => {
      this.pet_id = params["_id"];
      const petObservable : Observable<any> = this._httpService.getOnePet(params["_id"]);
      petObservable.subscribe(res => {
        this.pet = res;
      });
    });
  }

  delete(_id : string) : void {
    const petObservable : Observable<any> = this._httpService.unPet(_id);
    petObservable.subscribe(res => this.ngOnInit());
  }

  like(_id : string) {
    this.isLiked = true;
    const petObservable : Observable<any> = this._httpService.like(_id, this.pet);
    petObservable.subscribe(res => this.ngOnInit());
  }

}

