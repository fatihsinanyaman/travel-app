import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetDaysPage } from './set-days.page';

describe('SetDaysPage', () => {
  let component: SetDaysPage;
  let fixture: ComponentFixture<SetDaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetDaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
