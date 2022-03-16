import { Component, OnInit } from '@angular/core';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  onClickDelete(user: User) {
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
