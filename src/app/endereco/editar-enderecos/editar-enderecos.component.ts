import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-editar-enderecos',
  templateUrl: './editar-enderecos.component.html',
  styleUrls: ['./editar-enderecos.component.css'],
})
export class EditarEnderecosComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;
  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params['id'];
    this.endereco = this.enderecoService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
