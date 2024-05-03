import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userData : any;

  constructor(private router:Router){}
  ngOnInit(): void {
    const currentUserString = localStorage.getItem('loggedUser');
    if (currentUserString) {
      this.userData = JSON.parse(currentUserString);
      console.log(this.userData.name,'rk resort')
    } else {
      // If no user is logged in, navigate back to the login page
      this.router.navigate(['/register']);
    }
  }

  // ngOninit(): void{
  //   const currentUserString = localStorage.getItem('loggedUser');
  //   if (currentUserString) {
  //     this.userData = JSON.parse(currentUserString);
  //     console.log(this.userData.name,'rk resort')
  //   } else {
  //     // If no user is logged in, navigate back to the login page
  //     this.router.navigate(['/register']);
  //   }
  // }


}
