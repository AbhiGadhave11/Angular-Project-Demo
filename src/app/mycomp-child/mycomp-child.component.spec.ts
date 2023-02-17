import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompChildComponent } from './mycomp-child.component';

describe('MycompChildComponent', () => {
  let component: MycompChildComponent;
  let fixture: ComponentFixture<MycompChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycompChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycompChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
