import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEnderecosComponent } from './editar-enderecos.component';

describe('EditarEnderecosComponent', () => {
  let component: EditarEnderecosComponent;
  let fixture: ComponentFixture<EditarEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEnderecosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
