import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent implements OnInit {
   loginForm: FormGroup;
   signupForm: FormGroup
  loginsubmitted = false;
  signupsubmited = false;
  hide: boolean = true;

  constructor( private formBuilder: FormBuilder,private router: Router,private UserService:UserService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required ]],
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNum: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      
    });

   
  }

  ngOnInit(): void {
   
  }
  
  onLogin(){
    this.loginsubmitted = true;
    
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.UserService.loginService(reqData).subscribe((res: any) => {
      console.log(res);
  
      localStorage.setItem('token',res.data);
      console.log(res.data);
      this.router.navigateByUrl('/dashboard')
      
    })

  }
  onSignup(){
    this.signupsubmited = true;
    let reqData= {
      fullName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      mobileNum: this.signupForm.value.mobileNum,
     
   
    }
    this.UserService.registerService(reqData).subscribe((res:any)=>{
      console.log(res)
      
    }) 

  }
  forgetpassword(){
   this.router.navigateByUrl('/forgetpass')
  }

 
showPassword() {
    this.hide = !this.hide;
 }
}
