import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeOptionTwoComponent } from './tree-option-two.component';

describe('TreeOptionTwoComponent', () => {
  let component: TreeOptionTwoComponent;
  let fixture: ComponentFixture<TreeOptionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeOptionTwoComponent]
    });
    fixture = TestBed.createComponent(TreeOptionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
