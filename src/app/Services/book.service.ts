import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../Services/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token : any;

  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem('token')
  }

  getAllBooksService() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/book', true, header)
  }

  addToCartService(_id:any) {
    console.log(_id)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.postService('/cart/create/'+_id,{}, true, header)
  }

  
  addToWishlistService(_id:any) {
    console.log(_id)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.postService('/list/wishlist/'+_id,{}, true, header)
  }

  
  getallcartlist(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.getService('/cart/get', true,header);
  }

  removeCartItemService(_id:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.putService('/cart/delete/'+_id,{}, true, header)

  }
  
  checkOutService(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+ this.token,
      })
    }
    return this.httpService.postService('/order/addorder',reqData,true, header)

  }

  getWishlistService(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.getService('/list/getlist', true,header);
  }

  removeWishlistService(_id:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/list/dellist/'+_id,{}, true,header);
  }
}

