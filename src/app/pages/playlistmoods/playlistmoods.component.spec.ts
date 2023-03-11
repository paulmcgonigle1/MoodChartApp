import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistmoodsComponent } from './playlistmoods.component';

describe('PlaylistmoodsComponent', () => {
  let component: PlaylistmoodsComponent;
  let fixture: ComponentFixture<PlaylistmoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistmoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistmoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
