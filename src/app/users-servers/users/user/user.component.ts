import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'] };
  

 this.route.params.subscribe(
    (updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
    }
  );

  }

 

}
