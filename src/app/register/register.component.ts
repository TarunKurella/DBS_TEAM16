import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

const backendurl = environment.backendurl;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  register(Form:NgForm)
  {
    if(Form.valid)
    {
      if(Form.value.password==Form.value.cfpassword)
      {
          this.http.post(backendurl+"/users/register",Form.value).subscribe((respfromserver)=>{
            if(respfromserver["message"]=="signup successfull")
            {
              Form.resetForm();
              this.router.navigate(['/login']);
              alert("register sucess,redirecting to login");

            }
            else if(respfromserver["message"]=="user exists")
            {
              alert("user existed");
            }
            else
            {
              alert("register failed");
            }
          })
      }
      else
      {
        alert("pwd and cfpwd must be same");
      }

    }
    else
    {
      alert("all fields required");
    }
  }
}
