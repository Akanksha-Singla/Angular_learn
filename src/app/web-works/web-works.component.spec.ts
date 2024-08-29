import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorksComponent } from './web-works.component';

describe('WebWorksComponent', () => {
  let component: WebWorksComponent;
  let fixture: ComponentFixture<WebWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
