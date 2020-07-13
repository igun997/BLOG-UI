import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AlertController, LoadingController} from "ionic-angular";
import {AndroidPermissions} from "@ionic-native/android-permissions";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  host:string;
  token:string;
  isLoading = false;
  constructor(public http: HttpClient,public loadingController: LoadingController,private alertController:AlertController,private permit:AndroidPermissions) {
    console.log('Hello ApiProvider Provider');
    this.host = "https://anemia2.maugini.in";
    this.token = null;
    this.permit.checkPermission(this.permit.PERMISSION.INTERNET).then(
        result=>{
          console.log('Has permission?', result.hasPermission)
        },
        err=>{
          this.permit.requestPermission(this.permit.PERMISSION.INTERNET)
        }
    )
  }
  _request(path:string,data,type:string):Observable<any>{
    let options = {
      headers: {
        "Authorization":""
      }
    };
    if (this.token !== null){
      options = {
        headers: {
          "Authorization":this.token
        }
      };
    }

    if (type == "put"){
      return  this.http.put(this.host + path, data,options);
    }else if (type == "post"){
      return this.http.post(this.host + path, data,options);
    }else if (type == "get"){
      let redata = {
        headers:options.headers,
        params:data
      };
      return this.http.get(this.host + path, redata);
    }else if (type == "delete"){
      let redata = {
        headers:options.headers,
        params:data
      };
      return this.http.delete(this.host + path, redata);
    }

  }
  _spin(){
    return this.loadingController.create();
  }
  async _startSpin() {
    this.isLoading = true;
    let start = await this.loadingController.create({
      // duration: 5000,
    });
    start.present().then(a => {
      console.log("Presenting Start")
      console.log(this.isLoading);
      if (!this.isLoading) {
        start.dismiss().then(() => console.log('abort presenting'));
      }
    })
    return  start;
  }

  async _removeSpin() {
    this.isLoading = false;
  }

  async _alert(message:string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  login(username:string,password:string){
    let data = {
      username:username,
      password:password
    };
    return this._request("/api/blog/basic/auth",data,"post");
  }

  register(data){
    return this._request("/api/blog/basic/register",data,"post");
  }

  feed(limit:number,sort:number,category_id:number){
    let params = {
      limit:limit,
      sort:sort,
      category_id:category_id
    };
    return this._request("/api/blog/public/feed",params,"get");
  }

  feed_home(limit:number,sort:number){
    let params = {
      limit:limit,
      sort:sort,
    };
    return this._request("/api/blog/public/feed",params,"get");
  }

  feed_detail(id:number){
    let params = {
      id:id
    };
    return this._request("/api/blog/public/feed",params,"get");
  }

  feed_category(limit:number,sort:number,parent:number,path:string = null){
      let data = {
        limit:limit,
        sort:sort,
        parent:parent
      }
      if (path === null){
        path = "/api/blog/public/category";
      }
      return this._request(path,data,"get");
  }

  category_detail(id:number){
    let data = {
      id:id
    }
    let path = "/api/blog/public/category";
    return this._request(path,data,"get");
  }

  feed_category_detail(limit:number,sort:number,category_id:number,path:string = null){
    let data = {
      limit:limit,
      sort:sort,
      parent_id:category_id,
    }
    if (path === null){
      path = "/api/blog/public/category";
    }
    return this._request(path,data,"get");
  }

}
