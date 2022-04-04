import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public  isExists=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Signup(val)
  {
    
    var obj=localStorage.getItem(val.username);
     if(obj==null)
    {
      localStorage.setItem(val.username,JSON.stringify(val));
    }
    else{
       this.isExists=true;
    }
     
  }
}
