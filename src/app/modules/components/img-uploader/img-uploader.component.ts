import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-img-uploader',
  standalone: true,
  imports: [ButtonModule, ImageModule],
  templateUrl: './img-uploader.component.html',
  styleUrl: './img-uploader.component.scss'
})
export class ImgUploaderComponent {
  @Input() img: string = '';
  @Output() imageUpdated = new EventEmitter<{ file: File, img: string }>();

  readonly maximumFileUploadMB = 3;
  readonly allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  constructor(
    private messageService: MessageService
  ){

  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const fileSizeMB = file.size / 1024 / 1024;

    if (fileSizeMB > this.maximumFileUploadMB) {
      this.messageService.add({ severity: 'contrast', summary: 'Update image', detail: `Maximum upload file size: ${this.maximumFileUploadMB} MB.`, life: 3000 });
      input.value = '';
      return;
    }

    if (!this.allowedTypes.includes(file.type)) {
      this.messageService.add({ severity: 'contrast', summary: 'Update image', detail: 'Sorry, this file type is not allowed to be uploaded.', life: 3000 });
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUpdated.emit({ file, img: reader.result as string });
    };
    reader.readAsDataURL(file);
  }
}
