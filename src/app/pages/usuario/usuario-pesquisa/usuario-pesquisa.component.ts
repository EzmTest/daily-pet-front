import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.scss']
})
export class UsuarioPesquisaComponent implements OnInit {

  public usuarios:Array<Usuario> = [];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource(this.usuarios);
  public displayedColumns:string[] = ['id','nome','login','senha','acoes'] ;
  public form:FormGroup = new FormGroup({
    pesquisa:new FormControl('')
  });
  constructor(private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.pesquisar();    
  }
  public pesquisar(){
    let nome = this.form.controls['pesquisa'].value;
    this.usuarioService.search(nome).subscribe((lista)=>{
      this.usuarios = lista;
      this.dataSource = new MatTableDataSource(this.usuarios);
    });
  }
  public remover(usuario){
    this.usuarioService.delete(usuario.id).subscribe((res)=>{
      let index = this.usuarios.indexOf(usuario);
      this.usuarios.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.usuarios);
    });    
  }
  public alterar(usuario){
    this.router.navigate(['/usuario/cadastro', usuario]); 
  }
  public novo(){
    this.router.navigate(['/usuario/cadastro']); 
  }

}
