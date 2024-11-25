import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditandoPage } from './editando.page';

describe('EditandoPage', () => {
  let component: EditandoPage;
  let fixture: ComponentFixture<EditandoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
