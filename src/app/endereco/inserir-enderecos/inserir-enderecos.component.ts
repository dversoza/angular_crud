import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/shared/models/endereco';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-inserir-enderecos',
  templateUrl: './inserir-enderecos.component.html',
  styleUrls: ['./inserir-enderecos.component.css'],
})
export class InserirEnderecosComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;
  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.endereco = new Endereco();
  }

  criar() {
    if (this.formEndereco.form.valid) {
      this.enderecoService.criar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
