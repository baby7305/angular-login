import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    let username = target.querySelector('#username').value
    let password = target.querySelector('#password').value
    this.authService.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        this.router.navigate(['admin'])
        this.authService.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username)
    console.log(password)
  }
}
