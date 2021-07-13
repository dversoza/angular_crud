import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEnderecosComponent } from './inserir-enderecos.component';

describe('InserirEnderecosComponent', () => {
  let component: InserirEnderecosComponent;
  let fixture: ComponentFixture<InserirEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirEnderecosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
