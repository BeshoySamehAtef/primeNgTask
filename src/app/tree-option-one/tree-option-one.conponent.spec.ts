import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeOptionOneComponent } from './tree-option-one.component';

describe('TreeComponent', () => {
  let component: TreeOptionOneComponent;
  let fixture: ComponentFixture<TreeOptionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeOptionOneComponent]
    });
    fixture = TestBed.createComponent(TreeOptionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
