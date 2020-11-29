import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/models/animal';

@Component({
  selector: 'app-animal-pesquisa',
  templateUrl: './animal-pesquisa.component.html',
  styleUrls: ['./animal-pesquisa.component.scss']
})
export class AnimalPesquisaComponent implements OnInit {

  public listaAnimais: Array<Animal> = [];
  public dataSource:MatTableDataSource<Animal> = new MatTableDataSource(this.listaAnimais);
  public displayedColumns:string[] = ['codigo','titulo','raca','descricao'];
  public form:FormGroup = new FormGroup({
    pesquisa:new FormControl('')
  });
  constructor(private router:Router, private animalService:AnimalService) { }
  
  ngOnInit(): void {
    this.pesquisar();    
  }
  
  public pesquisar(){
    let nome = this.form.controls['pesquisa'].value;
    this.animalService.search(nome).subscribe((lista)=>{
      this.listaAnimais = lista;
      this.dataSource = new MatTableDataSource(this.listaAnimais);
    });
  }
  
  public remover(animal){
    this.animalService.delete(animal.id).subscribe((res)=>{
      let index = this.listaAnimais.indexOf(animal);
      this.listaAnimais.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.listaAnimais);
    });    
  }
  
  public alterar(animal) {
    this.router.navigate(['/animal/cadastro', animal]); 
  }
  
  public novo(){
    this.router.navigate(['/animal/cadastro']); 
  }
}
