import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuBarComponent } from './mobile-menu-bar.component';

describe('MobileMenuBarComponent', () => {
  let component: MobileMenuBarComponent;
  let fixture: ComponentFixture<MobileMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenuBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
