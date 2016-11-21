/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DriveLocInputComponent } from './drive-loc-input.component';

describe('DriveLocInputComponent', () => {
  let component: DriveLocInputComponent;
  let fixture: ComponentFixture<DriveLocInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveLocInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveLocInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
