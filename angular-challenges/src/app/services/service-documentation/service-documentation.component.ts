import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {
  public user = new User();
  public state: { [key: string]: any } = {};
  public userIdExample = new User();

  constructor(
    public userService: UserService, 
    public snackbarService: SnackbarService, 
    public localStorageService: LocalStorageService,
    public route: ActivatedRoute
  ) { }

  public ngOnInit(): void {

    this.route.params.pipe(
      map((params) => params['id']),
      mergeMap((id) => this.userService.getUserById(id))
    ).subscribe({
      next: (value) => {
        this.userIdExample = value;
      }
    })

    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });

    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }

  public callSnackbar() : void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }

  public updateState(): void {
    this.localStorageService.setState('hello', 'darkness my old friend');
  }
}
