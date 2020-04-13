import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  final(final) {
  
   const obj = {
     final: final
   };
  //  console.log("aaaaaaaaaaaaaaa",obj);
   this.http.post(`${this.uri}/final`, obj)
       .subscribe(res => console.log('Done'));
 }
}
