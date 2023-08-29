import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierAchatComponent } from './panier-achat.component';

describe('PanierAchatComponent', () => {
  let component: PanierAchatComponent;
  let fixture: ComponentFixture<PanierAchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanierAchatComponent]
    });
    fixture = TestBed.createComponent(PanierAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
