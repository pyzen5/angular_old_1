import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Hero } from '../../common/hero';
import { forbiddenNameValidator } from './customValidator';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // this is for the reference in template for looping
  get aliases() {
    return this.userForm.get('aliases') as FormArray;
  }

  name = new FormControl('', [Validators.required, forbiddenNameValidator(/bob/i)]);

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  powers = ['Fly', 'Jump', 'Smart'];
  model = new Hero(23, 'Skylark', this.powers[0], 'Rover');

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setProfileForm() {
    this.profileForm.setValue({
      firstName: 'Phani',
      lastName: 'Kiran',
      address: {
        street: 'Somewhere',
        city: 'Bangalore',
        state: 'KA'
      }
    });
  }

  patchProfileForm() {
    this.profileForm.patchValue({
      lastName: 'Raj',
      address: {
        city: 'Delhi'
      }
    });
  }

  onFBSubmit() {
    console.log(this.userForm.value);
  }

  addAliases() {
    // (this.userForm.get('aliases') as FormArray).push(this.fb.control(''));
    this.aliases.push(this.fb.control(''));
  }

  tdSubmit() {
    console.log('submitted!!');
  }
}
