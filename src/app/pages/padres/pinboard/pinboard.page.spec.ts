import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinboardPage } from './pinboard.page';

describe('PinboardPage', () => {
  let component: PinboardPage;
  let fixture: ComponentFixture<PinboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PinboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
