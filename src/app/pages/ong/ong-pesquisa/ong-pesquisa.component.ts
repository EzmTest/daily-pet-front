import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/models/ong';

@Component({
  selector: 'app-ong-pesquisa',
  templateUrl: './ong-pesquisa.component.html',
  styleUrls: ['./ong-pesquisa.component.scss']
})
export class OngPesquisaComponent implements OnInit {

  public listaOngs: Array<Ong> = [];
  public dataSource:MatTableDataSource<Ong> = new MatTableDataSource(this.listaOngs);
  public displayedColumns:string[] = ['denominacao','cnpj','descricao'];
  public form:FormGroup = new FormGroup({
    pesquisa:new FormControl('')
  });
  constructor(private router:Router, private ongService:OngService) { }
  
  ngOnInit(): void {
    this.pesquisar();    
  }
  
  public pesquisar(){
    let nome = this.form.controls['pesquisa'].value;
    this.ongService.search(nome).subscribe((lista)=>{
      this.listaOngs = lista;
      this.dataSource = new MatTableDataSource(this.listaOngs);
    });
  }
  
  public remover(ong){
    this.ongService.delete(ong.id).subscribe((res)=>{
      let index = this.listaOngs.indexOf(ong);
      this.listaOngs.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.listaOngs);
    });    
  }
  
  public alterar(ong) {
    this.router.navigate(['/ong/cadastro', ong]); 
  }
  
  public novo(){
    this.router.navigate(['/ong/cadastro']); 
  }

}
