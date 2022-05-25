import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

 
  BookList: any;
  books: any;
  bookCount:any;
  searchword: any;
  page:number = 1;
  totalLength:any;
  

  constructor(private bookService:BookService,private dataservice: DataService) { }

  ngOnInit(): void {
    this.getAllBook();
    this.dataservice.receivedData.subscribe((res: any) => { 
      console.log(res)
      this.searchword = res;
      console.log(this.searchword);




    });
    
  }
  getAllBook() {
    this.bookService.getAllBooksService().subscribe((res: any) => {
      console.log(res);
      this.BookList = res.data;
      this.totalLength=res.data.length
      this.bookCount = res.data.length;
      
    
      

    
    

    })
  }
  
  addToCart(book:any){
    this.bookService.addToCartService(book._id).subscribe((res: any) => {
      console.log(res);
      console.log(book._id)

    })
  }
  addToWishlist(book:any){
    this.bookService.addToWishlistService(book._id).subscribe((res: any) => {
      console.log(res);
    })

  }

  lowToHigh(){
    this.BookList = this.BookList.sort((low:any,high:any)=>low.price-high.price);

  }
  highToLow(){
    this.BookList = this.BookList.sort((low:any,high:any)=>high.price-low.price);


  }
  latest(){
    this.BookList.reverse();

  }

}
