import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AvatarModule } from 'primeng/avatar';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { MIME } from '../../const/mime';
import { SharedService } from '../../serives/shared.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ButtonModule, CommonModule, ReactiveFormsModule, InputTextModule, MessageModule, InputGroupModule, InputGroupAddonModule, DropdownModule, InputSwitchModule, AvatarModule, FileUploadModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
    img: any = 'images/users/john-doe.png';
    // messageService = inject(MessageService);
  roles: any[] = [
      { label: 'Super Admin', value: 'superAdmin' },
      { label: 'Admin', value: 'admin' }
    ];
  departments: any[] = [
      { label: 'Fire Fighter', value: 'fireFighter' },
      { label: 'Fire Fighter 2', value: 'fireFighter2' },
    ];

    exampleForm: FormGroup;

    formSubmitted = false;

    constructor(
      private fb: FormBuilder,
      private sharedService: SharedService
    ) {
      this.sharedService.currentPageMeta$.next({label: 'Users', icon: 'users'});      
        this.exampleForm = this.fb.group({
            firstname: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            role: new FormControl('superAdmin', Validators.required),
            department: new FormControl('fireFighter', Validators.required),
            rfid: [false],
            rfidText: ['', Validators.required],
        });

// Watch the rfid value
        this.exampleForm.get('rfid')?.valueChanges.subscribe((rfidEnabled) => {
        const rfidTextControl = this.exampleForm.get('rfidText');
        if (rfidEnabled) {
            rfidTextControl?.setValidators(Validators.required);
        } else {
            rfidTextControl?.clearValidators();
            rfidTextControl?.setValue(''); // optional: clear value when disabled
        }
        rfidTextControl?.updateValueAndValidity();
        });


    }

        onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

  ngOnInit(): void {
    this.getAcceptedFormats();
  }
  
    getAcceptedFormats() {
    let temp = [];
    for (let index = 0; index < this.accept.length; index++) {
      if (this.accept[index] === 'pdf') temp.push(MIME.file.pdf);
      else if (this.accept[index] === 'word') temp.push(MIME.file.word);//
      else if (this.accept[index] === 'jpg') temp.push(MIME.image.jpg);//
      else if (this.accept[index] === 'png') temp.push(MIME.image.png);
    }
    this.acceptTemp.data = temp.flat();
    this.acceptTemp.str = this.acceptTemp.data.join(', ');
  }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }

    // onBasicUploadAuto(event: UploadEvent) {
    //     console.log('tes');
        
    //     // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    // }

maximumFileUpload: number = 20;

  accept: any = ["jpg", "png"];
  acceptTemp: any = {
    data: [],
    str: ''
  };

  selectFile(event: any): void {
    if (!event.target.files || !event.target.files[0] || event.target.files[0].length == 0) return;
    let temp_file_size_mb = (event.target.files[0].size / 1024 / 1024);
    if (temp_file_size_mb > this.maximumFileUpload) {
      alert(`Maximum upload file size: ${this.maximumFileUpload} MB.`);
      return;
    }
    // 
    let file = event.target.files[0];
    let fileType = file.type;
    // this.fileName = file.name;
    if (this.acceptTemp.data.includes(fileType)) {
      this.onFileSelected(file);
    //   this.selectFileEmiter.emit(file);
    } else {
      alert(`sorry, this file type is not allowed to be uploaded.`);
    }
  }

  onFileSelected(file: any) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.img = e?.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
