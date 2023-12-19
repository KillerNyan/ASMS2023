import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPostitPage } from './nuevo-postit.page';

describe('NuevoPostitPage', () => {
  let component: NuevoPostitPage;
  let fixture: ComponentFixture<NuevoPostitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoPostitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
