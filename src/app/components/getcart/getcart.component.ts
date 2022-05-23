import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  cartbooks:any= [];
  orderList: any = [];
  cartcount :any;
  book:any
  disabled: boolean = true;
  customerForm!: FormGroup;
  submitted = false;
  
  
  constructor(private UserService:UserService, private router:Router, private route:ActivatedRoute ,private bookService:BookService,private formbuilder: FormBuilder) { 
    this.customerForm = this.formbuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getcartlist()

    
    
  
  }
  getcartlist(){
    this.bookService.getallcartlist().subscribe((res:any)=>{
      console.log(res);
      this.cartcount = res.data.book.length
      this.cartbooks = res.data.book;
    })
  }
  removecartitem(book:any){
    this.bookService.removeCartItemService(book._id).subscribe((res: any) => {
      console.log(res);
      
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], {
        relativeTo:this.route
      })

    })
  this.getcartlist();
  }
  
  

  
  onhome(){
    this.router.navigateByUrl('/dashboard/getAllBooks')

  }
  customerInfo(){
    this.submitted= true;

    let reqData= {
      addressType:"Home",
      name: this.customerForm.value.name,
      phoneNumber: this.customerForm.value.phoneNumber,
      fullAddress: this.customerForm.value.fullAddress,
      city: this.customerForm.value.city,
     state: this.customerForm.value.state
   
    }
    this.UserService.customerService(reqData).subscribe((res:any)=>{
      console.log(res)
     
    }) 


  }
  orderConfirm(){
    
    
  
    let reqData = {
      "orders": this.orderList
    }
    this.bookService.checkOutService(reqData).subscribe((res: any) => {
      console.log(res);
  
    
      
    })
  
     this.router.navigateByUrl("/dashboard/orderplaced")
  }
  


  


}
