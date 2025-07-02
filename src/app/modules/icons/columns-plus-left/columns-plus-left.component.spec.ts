import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsPlusLeftComponent } from './columns-plus-left.component';

describe('ColumnsPlusLeftComponent', () => {
  let component: ColumnsPlusLeftComponent;
  let fixture: ComponentFixture<ColumnsPlusLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnsPlusLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnsPlusLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
