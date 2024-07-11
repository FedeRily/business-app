import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStoreComponent } from './table-store.component';

describe('TableStoreComponent', () => {
  let component: TableStoreComponent;
  let fixture: ComponentFixture<TableStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
