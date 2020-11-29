import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizacaoService } from 'src/app/services/organizacao.service';
import { Organizacao } from 'src/models/organizacao';

@Component({
  selector: 'app-organizacao-cadastro',
  templateUrl: './organizacao-cadastro.component.html',
  styleUrls: ['./organizacao-cadastro.component.scss'],
  providers: [OrganizacaoService]
})
export class OrganizacaoCadastroComponent implements OnInit {

  public organizacao: Organizacao = new Organizacao();
  public form: FormGroup = new FormGroup({
    denominacao:new FormControl(''),
    cnpj: new FormControl(''),
    telefone: new FormControl(''),
  });
  constructor(private route:ActivatedRoute, private router:Router, private organizacaoService: OrganizacaoService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.organizacao = params as Organizacao;
      this.form.patchValue(this.organizacao);
    });
  }

  public salvar(){
    if (this.form.invalid){
      alert('Há campos vazios!');
      return;
    }
    this.organizacao = this.form.value;
    this.organizacaoService.save(this.organizacao).subscribe((data)=>{
      alert('Salvo com Sucesso');
      this.router.navigate(['organizacao/pesquisa']);
    });    
  }

}
