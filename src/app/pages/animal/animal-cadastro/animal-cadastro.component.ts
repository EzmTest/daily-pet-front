import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/models/animal';

@Component({
  selector: 'app-animal-cadastro',
  templateUrl: './animal-cadastro.component.html',
  styleUrls: ['./animal-cadastro.component.scss']
})
export class AnimalCadastroComponent implements OnInit {

  public animal: Animal = new Animal();
  public form: FormGroup = new FormGroup({
    codigo:new FormControl({disabled: true}),
    titulo:new FormControl(''),
    raca: new FormControl(''),
    descricao: new FormControl(''),
  });
  constructor(private route:ActivatedRoute, private router:Router, private animalService: AnimalService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.animal = params as Animal;
      this.form.patchValue(this.animal);
    });
  }

  public salvar(){
    if (this.form.invalid){
      alert('Há campos vazios!');
      return;
    }
    this.animal = this.form.value;
    this.animalService.save(this.animal).subscribe((beast)=>{
      alert('Salvo com Sucesso');
      this.router.navigate(['animal/pesquisa']);
    });    
  }

}
