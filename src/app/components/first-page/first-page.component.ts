import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RegisterService } from '../../services/register.service';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  newUser = new User('@example','@pass');
  response:any = null;
  constructor(private register: RegisterService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.register.register(this.newUser)
      .subscribe(value => this.response = value.message , err => console.log(err));
  }
}
