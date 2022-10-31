import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocsaComponent } from './user-docsa.component';

describe('UserDocsaComponent', () => {
  let component: UserDocsaComponent;
  let fixture: ComponentFixture<UserDocsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDocsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDocsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
