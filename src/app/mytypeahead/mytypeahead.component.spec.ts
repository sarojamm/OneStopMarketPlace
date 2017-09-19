import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytypeaheadComponent } from './mytypeahead.component';

describe('MytypeaheadComponent', () => {
  let component: MytypeaheadComponent;
  let fixture: ComponentFixture<MytypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
