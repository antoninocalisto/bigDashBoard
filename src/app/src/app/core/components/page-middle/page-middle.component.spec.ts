import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMiddleComponent } from './page-middle.component';

describe('PageMiddleComponent', () => {
  let component: PageMiddleComponent;
  let fixture: ComponentFixture<PageMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
