import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/services';
import { Cidade } from 'src/app/shared';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-inserir-enderecos',
  templateUrl: './inserir-enderecos.component.html',
  styleUrls: ['./inserir-enderecos.component.css'],
})
export class InserirEnderecosComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;
  cidades!: Cidade[];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.endereco = new Endereco();
    this.cidades = this.cidadeService.listarTodas();
  }

  criar() {
    if (this.formEndereco.form.valid) {
      this.enderecoService.criar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
