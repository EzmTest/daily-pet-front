import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrganizacaoService } from 'src/app/services/organizacao.service';
import { Organizacao } from 'src/models/organizacao';

@Component({
  selector: 'app-organizacao-pesquisa',
  templateUrl: './organizacao-pesquisa.component.html',
  styleUrls: ['./organizacao-pesquisa.component.scss']
})
export class OrganizacaoPesquisaComponent implements OnInit {

  public listaOrganizacoes: Array<Organizacao> = [];
  public dataSource:MatTableDataSource<Organizacao> = new MatTableDataSource(this.listaOrganizacoes);
  public displayedColumns:string[] = ['denominacao','cnpj','telefone'];
  public form:FormGroup = new FormGroup({
    pesquisa:new FormControl('')
  });
  constructor(private router:Router, private organizacaoervice:OrganizacaoService) { }
  
  ngOnInit(): void {
    this.pesquisar();    
  }
  
  public pesquisar(){
    let nome = this.form.controls['pesquisa'].value;
    this.organizacaoervice.search(nome).subscribe((lista)=>{
      this.listaOrganizacoes = lista;
      this.dataSource = new MatTableDataSource(this.listaOrganizacoes);
    });
  }
  
  public remover(Organizacao){
    this.organizacaoervice.delete(Organizacao.id).subscribe((res)=>{
      let index = this.listaOrganizacoes.indexOf(Organizacao);
      this.listaOrganizacoes.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.listaOrganizacoes);
    });    
  }
  
  public alterar(organizacao) {
    this.router.navigate(['/organizacao/cadastro', organizacao]); 
  }
  
  public novo(){
    this.router.navigate(['/organizacao/cadastro']); 
  }

}
