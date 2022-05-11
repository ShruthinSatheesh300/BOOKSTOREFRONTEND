import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  passwordResetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router,private UserService:UserService) { }

  ngOnInit(): void {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', [ Validators.email,Validators.required]],
     
    });
  }
  oncreateaccount(){
    this.router.navigateByUrl('/signup-login')

  }
  onSubmit(){
    this.submitted = true
    let reqData = {
      email: this.passwordResetForm.value.email
    }
    console.log(this.passwordResetForm.value);
    this.UserService.forgetPassService(reqData).subscribe((res: any) => {
      console.log(res);
    })
  }

  }


