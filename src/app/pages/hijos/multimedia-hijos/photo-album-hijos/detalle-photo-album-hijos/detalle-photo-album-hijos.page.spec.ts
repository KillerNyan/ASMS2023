import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePhotoAlbumHijosPage } from './detalle-photo-album-hijos.page';

describe('DetallePhotoAlbumHijosPage', () => {
  let component: DetallePhotoAlbumHijosPage;
  let fixture: ComponentFixture<DetallePhotoAlbumHijosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallePhotoAlbumHijosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
