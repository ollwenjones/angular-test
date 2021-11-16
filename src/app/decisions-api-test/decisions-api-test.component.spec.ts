import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionsApiTestComponent } from './decisions-api-test.component';

describe('DecisionsApiTestComponent', () => {
  let component: DecisionsApiTestComponent;
  let fixture: ComponentFixture<DecisionsApiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionsApiTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionsApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
