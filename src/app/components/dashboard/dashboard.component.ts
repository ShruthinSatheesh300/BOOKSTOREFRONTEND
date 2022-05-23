import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }

  cart(){
    this.router.navigateByUrl('/dashboard/getcart')
  }
  
  onWishList(){
    this.router.navigateByUrl('/dashboard/wishlist')

  }
  logout(){
    this.router.navigateByUrl('/signup-login')

  }
  
  searchBook(search: any) {  
    console.log(search);  
    this.dataService.sendData(search) 
  }

}
