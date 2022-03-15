import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe(response => {
      this.users = response;
    });
  }

  onClickDelete(user: any) {
    if (confirm('are you sure?')) {
      this.userService.delete(user.id).subscribe({
        next: () => {
          console.log(`user ${user.id} deleted!`);
          this.loadUsers();
        }
      })
    }
  }

}
