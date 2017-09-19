import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsehistoryComponent } from './browsehistory.component';

describe('BrowsehistoryComponent', () => {
  let component: BrowsehistoryComponent;
  let fixture: ComponentFixture<BrowsehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
