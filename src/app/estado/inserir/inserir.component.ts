import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css'],
})
export class InserirComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;
  constructor(private estadoService: EstadoService, private router: Router) {}

  ngOnInit(): void {
    this.estado = new Estado();
  }

  criar() {
    if (this.formEstado.form.valid) {
      this.estadoService.criar(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
