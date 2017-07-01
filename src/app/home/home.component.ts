import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('userState', [
      state('inactive, new', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#fdcd3d',
        // transform: 'scale(1.07)'
      })),
      transition('inactive => active, new => active' , [
        style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }),
        animate ("200ms ease-in", style({
          backgroundColor: '#eee',
          transform: 'scale(1.1)'
        })),
        animate ("200ms ease-in", style({
          backgroundColor: '#fdcd3d',
          transform: 'scale(1)'
        }))
      ]),
      transition('active => inactive', animate('300ms ease-out')),
      transition('void => new', [
        style({
          backgroundColor: '#eee',
          transform: 'translateX(-100%)'
        }),
        animate ("600ms ease-in", style({
          backgroundColor: '#eee',
          transform: 'translateX(0%)'
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isFormSubmitted: boolean = false;
  users: User[];
  selectedUser: User;
  userForm: FormGroup; 
  REG_EXP: any = /[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}/;
  
  stateOfUser: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  
// addNewUser() {

// }

  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsTouched();
  }

  onSelect(usr: User) {
    this.selectedUser = usr;
    this.toggleState();
    this.userForm.controls['id'].setValue(this.selectedUser.id);
    this.userForm.controls['firstName'].setValue(this.selectedUser.firstName);
    this.userForm.controls['lastName'].setValue(this.selectedUser.lastName);
    this.userForm.controls['email'].setValue(this.selectedUser.email);
    this.userForm.controls['age'].setValue(this.selectedUser.age);
  }

  onSubmit(e: Event, form: FormGroup) {
    this.isFormSubmitted = true;
    e.preventDefault();
    this.userForm.controls['firstName'].markAsUntouched();
    this.userForm.controls['lastName'].markAsUntouched();
    this.userForm.controls['email'].markAsUntouched();
    this.userForm.controls['age'].markAsUntouched();

    if (this.userForm.valid) {
      let user: User = form.value;
      user.state = 'new';
      this.users.push(form.value)
      // this.userService.addUser(user);
      this.userForm.reset();
      this.isFormSubmitted = false;
    }
  }

  toggleState() {
    (this.selectedUser.state === 'new' || this.selectedUser.state === 'inactive') ? this.selectedUser.state = 'active' : this.selectedUser.state = 'inactive'
  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      id: [this.selectedUser ? this.selectedUser.id : null],
      firstName: [this.selectedUser ? this.selectedUser.firstName : null, Validators.required],
      lastName: [this.selectedUser ? this.selectedUser.lastName : null, Validators.required],
      email: [this.selectedUser ? this.selectedUser.email : null, [Validators.required, Validators.pattern(this.REG_EXP)]],
      age: [this.selectedUser ? this.selectedUser.age : null]
    });
    this.userService.getUsers()
                    .then(
                      data => {
                        this.users = data;
                        this.users.forEach(user => user.state = 'inactive')
                      }
                    )
  }

}
