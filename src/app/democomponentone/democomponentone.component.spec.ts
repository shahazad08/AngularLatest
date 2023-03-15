import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocomponentoneComponent } from './democomponentone.component';

describe('DemocomponentoneComponent', () => {
  let component: DemocomponentoneComponent;
  let fixture: ComponentFixture<DemocomponentoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocomponentoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocomponentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
