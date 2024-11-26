import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifuserPage } from './modifuser.page';

describe('ModifuserPage', () => {
  let component: ModifuserPage;
  let fixture: ComponentFixture<ModifuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
