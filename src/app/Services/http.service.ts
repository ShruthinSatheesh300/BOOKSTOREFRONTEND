import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl

  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, headers: any) {
    return this.httpClient.post(this.baseUrl + url, reqData, token && headers)
  }

  getService(url: string, token: boolean = false, headers: any) {
    return this.httpClient.get(this.baseUrl + url,token && headers )
  }

  putService(url: string , reqData: any, token: boolean = false, headers: any) {
    console.log(reqData);
    return this.httpClient.put(this.baseUrl + url, reqData, token && headers)


  }
}
