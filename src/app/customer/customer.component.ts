import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  place(Form:NgForm)
  {
    if(Form.valid)
    {
      this.http.post('http://localhost:2000/postorder',Form.value).subscribe((resfromserver)=>{
          if(resfromserver["message"]=="success")
          {
            alert("order placed successfully");
          }
          else
          {
            alert("ERROR in placing order")
          }
      })
    }
    else
    {
      alert("all fields required");
    }
  }

}
