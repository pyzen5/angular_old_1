import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesyntaxComponent } from './templatesyntax.component';

describe('TemplatesyntaxComponent', () => {
  let component: TemplatesyntaxComponent;
  let fixture: ComponentFixture<TemplatesyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
