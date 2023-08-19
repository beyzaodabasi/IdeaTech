import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailspopupComponent } from './userdetailspopup.component';

describe('UserdetailspopupComponent', () => {
  let component: UserdetailspopupComponent;
  let fixture: ComponentFixture<UserdetailspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailspopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdetailspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
