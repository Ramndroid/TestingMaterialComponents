import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea32Component } from './tarea32.component';

describe('Tarea32Component', () => {
  let component: Tarea32Component;
  let fixture: ComponentFixture<Tarea32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarea32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarea32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
