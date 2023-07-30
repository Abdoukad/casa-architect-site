import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosRealisationsComponent } from './nos-realisations.component';

describe('NosRealisationsComponent', () => {
  let component: NosRealisationsComponent;
  let fixture: ComponentFixture<NosRealisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosRealisationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosRealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
