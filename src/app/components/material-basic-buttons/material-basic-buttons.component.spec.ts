import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBasicButtonsComponent } from './material-basic-buttons.component';

describe('MaterialBasicButtonsComponent', () => {
  let component: MaterialBasicButtonsComponent;
  let fixture: ComponentFixture<MaterialBasicButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialBasicButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBasicButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
