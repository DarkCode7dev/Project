import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44306/api';
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  postDetail(user: User) {
     var x=this.http.post(this.rootURL + '/Detail/SaveDetail',user,this.headers);
     return x;
  }
  putDetail(user: User,id) {
    return this.http.put(this.rootURL + '/Detail/'+ user, id);
  }
  deleteDetail(id) {
    return this.http.delete(this.rootURL + '/Detail/MemberDeleteDetail/'+ id);
  }

  getData(){
    return this.http.get(this.rootURL + '/Detail/CustomerGetDetails');
  }

login(data ):Observable<any>{
  return this.http.post(`https://localhost:44306/api/Authenticate/Login`,data);
}

}
