import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItem:any=[];
   wishlistCount:any;
   book:any;


  constructor(private router:Router,private bookService:BookService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getWishlist()
  }
  getWishlist(){
    this.bookService.getWishlistService().subscribe((res:any)=>{
      console.log(res);
      this.wishlistItem = res.data.book;
        this.wishlistCount = res.data.book.length;
    
    })
  }

  removeItem(book:any){
   
      this.bookService.removeWishlistService(book._id).subscribe((res: any) => {
        console.log(res);
        
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], {
          relativeTo:this.route
        })
  
      })
    this.getWishlist();
    }
    
    



  
  onhome(){
    this.router.navigateByUrl('/dashboard/getAllBooks')

  }

}
