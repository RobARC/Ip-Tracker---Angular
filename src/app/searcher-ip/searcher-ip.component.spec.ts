import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherIPComponent } from './searcher-ip.component';

describe('SearcherIPComponent', () => {
  let component: SearcherIPComponent;
  let fixture: ComponentFixture<SearcherIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcherIPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcherIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
