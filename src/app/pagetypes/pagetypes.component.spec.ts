import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetypesComponent } from './pagetypes.component';

describe('PagetypesComponent', () => {
  let component: PagetypesComponent;
  let fixture: ComponentFixture<PagetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
