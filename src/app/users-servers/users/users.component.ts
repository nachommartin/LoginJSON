import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Jack'
    },
    {
      id: 2,
      name: 'Claire'
    },
    {
      id: 3,
      name: 'Jamie'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
