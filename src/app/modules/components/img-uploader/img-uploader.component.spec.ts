import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgUploaderComponent } from './img-uploader.component';

describe('ImgUploaderComponent', () => {
  let component: ImgUploaderComponent;
  let fixture: ComponentFixture<ImgUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgUploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
