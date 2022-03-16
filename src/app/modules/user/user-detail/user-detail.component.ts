import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getById(id).subscribe((res: User) => this.user = res);
  }

  save(): void {
    if (this.user) {
      this.userService.update(this.user).subscribe((res: User) => {
        console.log(`User ${res.name} was updated successfully!`);
        this.router.navigate(['user']);
      });
    }
  }

}
