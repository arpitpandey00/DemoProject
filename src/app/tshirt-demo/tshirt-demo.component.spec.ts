import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtDemoComponent } from './tshirt-demo.component';

describe('TshirtDemoComponent', () => {
  let component: TshirtDemoComponent;
  let fixture: ComponentFixture<TshirtDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshirtDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
