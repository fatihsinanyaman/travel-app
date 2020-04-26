import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultMagicPage } from './result-magic.page';

describe('ResultMagicPage', () => {
  let component: ResultMagicPage;
  let fixture: ComponentFixture<ResultMagicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMagicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultMagicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
