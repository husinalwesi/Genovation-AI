import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AvatarModule } from 'primeng/avatar';
import { FileUploadModule } from 'primeng/fileupload';
import { SharedService } from '../../serives/shared.service';
import { DdlOption } from '../../interfaces/interface';
import { ImgUploaderComponent } from '../../modules/components/img-uploader/img-uploader.component';
import { ActionBarComponent } from '../../modules/components/action-bar/action-bar.component';

const DEFAULT_IMG = 'images/users/john-doe.webp';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ButtonModule, CommonModule, ReactiveFormsModule, InputTextModule, MessageModule, InputGroupModule, InputGroupAddonModule, DropdownModule, InputSwitchModule, AvatarModule, FileUploadModule, ImgUploaderComponent, ActionBarComponent],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent {
  roles: DdlOption[] = [
    { label: 'Super Admin', value: 'superAdmin' },
    { label: 'Admin', value: 'admin' },
  ];
  departments: DdlOption[] = [
    { label: 'Fire Fighter', value: 'fireFighter' },
    { label: 'Fire Fighter 2', value: 'fireFighter2' },
  ];

  form: FormGroup;
  formSubmitted: boolean = false;
  img: string = DEFAULT_IMG;
  file: File | null = null;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.sharedService.currentPageMeta$.next({ label: 'Users', icon: 'users' });
    this.form = this.fb.group({
      firstname: ['', Validators.required, Validators.minLength(3)],
      middleName: [''],
      lastName: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required, Validators.minLength(8)],
      role: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      rfid: [false],
      rfidText: [''],
    });

    // Watch the rfid value
    this.form.get('rfid')?.valueChanges.subscribe((rfidEnabled) => {
      const rfidTextControl = this.form.get('rfidText');
      if (rfidEnabled) {
        rfidTextControl?.setValidators([
          Validators.required,
          Validators.minLength(3),
        ]);
      } else {
        rfidTextControl?.clearValidators();
        rfidTextControl?.setValue('');
      }
      rfidTextControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const payload = {
        firstname: this.form.get('firstname')?.value,
        middleName: this.form.get('middleName')?.value,
        lastName: this.form.get('lastName')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        role: this.form.get('role')?.value,
        department: this.form.get('department')?.value,
        rfid: this.form.get('rfid')?.value,
        rfidText: this.form.get('rfidText')?.value,
        img: this.file,
      };

      console.log(payload);

      this.form.reset();
      this.formSubmitted = false;
    }
  }

  ngOnInit(): void {}

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  onImageUpdate(data: { img: string; file: File | null }): void {
    this.img = data.img;
    this.file = data.file;
  }

  resetFormHandler() {
    this.formSubmitted = false;
    this.file = null;
    this.img = DEFAULT_IMG;
  }
}
