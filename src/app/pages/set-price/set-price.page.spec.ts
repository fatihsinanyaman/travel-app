import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetPricePage } from './set-price.page';

describe('SetPricePage', () => {
  let component: SetPricePage;
  let fixture: ComponentFixture<SetPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
