import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchLocationPage } from './search-location.page';

describe('SearchLocationPage', () => {
  let component: SearchLocationPage;
  let fixture: ComponentFixture<SearchLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
