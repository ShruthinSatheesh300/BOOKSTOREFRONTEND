import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   token : any;
  constructor(private httpService: HttpService) {this.token=localStorage.getItem('token') }

  registerService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				// 'Authorization': 'token'
			})
		}

		return this.httpService.postService('/users/userregister', reqData, false, header);
	}

  loginService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				// 'Authorization': 'token'
			})
		}
		return this.httpService.postService('/users/login', reqData, false, header);

	}

  forgetPassService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				// 'Authorization': 'token'
			})
		}
		return this.httpService.postService('/users/forgot', reqData, false, header);

	}


}
