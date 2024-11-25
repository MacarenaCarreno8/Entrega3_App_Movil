import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreandoPage } from './creando.page';

describe('CreandoPage', () => {
  let component: CreandoPage;
  let fixture: ComponentFixture<CreandoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
